import pandas as pd
import numpy as np
from sklearn.preprocessing import OneHotEncoder
from sklearn.metrics import classification_report
from sklearn.model_selection import train_test_split
import torch
from torch.utils.data import Dataset, DataLoader
from transformers import BertTokenizer, BertForSequenceClassification, get_linear_schedule_with_warmup
from torch.optim import AdamW
from torch.nn import CrossEntropyLoss
import torch.nn as nn
import numpy as np
import re
from flask import Flask, request, jsonify

df = pd.read_csv("./input/simpsons_dataset.csv")
print(df.shape)
df.head(3)

df = df[df.raw_character_text.isin([
    'Lisa Simpson', 'Homer Simpson', 'Bart Simpson', 'Marge Simpson', 
    'Ned Flanders', 'Grampa Simpson', 'Milhouse Van Houten', 
    'Nelson Muntz', 'Groundskeeper Willie'])]

df.raw_character_text.value_counts()

df.dropna(inplace=True)
df.shape

df.raw_character_text.unique()

def preprocess(text):
    text = re.sub(r'[^\w\s\']', ' ', text)
    text = re.sub(r' +', ' ', text)
    return text.strip().lower()

df['spoken_words'] = df['spoken_words'].map(preprocess)

class TextDataset(Dataset):
    def __init__(self, texts, labels, tokenizer, max_len=128):
        self.texts = texts
        self.labels = labels
        self.tokenizer = tokenizer
        self.max_len = max_len

    def __len__(self):
        return len(self.texts)

    def __getitem__(self, idx):
        text = str(self.texts[idx])
        label = self.labels[idx]

        encoding = self.tokenizer.encode_plus(
            text,
            add_special_tokens=True,
            max_length=self.max_len,
            return_token_type_ids=False,
            padding='max_length',
            truncation=True,
            return_attention_mask=True,
            return_tensors='pt'
        )

        return {
            'input_ids': encoding['input_ids'].flatten(),
            'attention_mask': encoding['attention_mask'].flatten(),
            'labels': torch.tensor(label, dtype=torch.long)
        }

# Main training function
def test_bert_model(test_text, df, text_column, label_column, model):
    # OneHotEncoder for labels
    ohe = OneHotEncoder(sparse_output=False, handle_unknown='ignore')
    labels = ohe.fit_transform(df[label_column].values.reshape(-1, 1))
    label_map = {i: category for i, category in enumerate(ohe.categories_[0])}
    num_labels = len(ohe.categories_[0])

    data = {label_column: [''], text_column: [test_text]}
    test_df = pd.DataFrame(data=data)

    # Initialize tokenizer and model
    tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

    # Create datasets
    test_dataset = TextDataset(test_df[text_column].values,
                            np.argmax(ohe.transform(df[label_column].values.reshape(-1, 1)), axis=1),
                            tokenizer)

    # Create data loaders
    test_loader = DataLoader(test_dataset, batch_size=16)

    # setup
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    model = model.to(device)

    # Test evaluation
    model.eval()
    predictions = []
    tests = []
    true_labels = []

    with torch.no_grad():
        for d in test_loader:
            input_ids = d["input_ids"].to(device)
            attention_mask = d["attention_mask"].to(device)
            labels = d["labels"].to(device)

            outputs = model(input_ids=input_ids, attention_mask=attention_mask)
            _, preds = torch.max(outputs.logits, dim=1)

            tests.extend(outputs.logits)
            predictions.extend(preds.cpu().tolist())
            true_labels.extend(labels.cpu().tolist())

    # Convert numerical predictions back to original labels
    predictions = [label_map[pred] for pred in predictions]
    true_labels = [label_map[label] for label in true_labels]
    return predictions, tests

def predict_from_string(predictString):
    predictions, tests = test_bert_model(predictString, df, text_column, label_column, model)
    str = f"Predict string: {predictString},"
    str += f"Predicted: {predictions},"
    testList = []
    for i in tests[0]:
        testList.append(i.cpu().numpy())
    data = {
        "Probability": testList
    }
    df_tests = pd.DataFrame(data, index = [
        "Bart Simpson", "Grampa Simpson", "Groundskeeper Willie", "Homer Simpson", 
        "Lisa Simpson", "Marge Simpson", "Milhouse Van Houten", "Ned Flanders", 
        "Nelson Muntz", ])
    str += df_tests.to_string()
    return str

model = BertForSequenceClassification.from_pretrained("./model")

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = model.to(device)

text_column = "spoken_words"
label_column = "raw_character_text"

print("go to: https://planetclaire.tv/quotes/simpsons/ to get quotes from Simpsons shows")
print("Use a post to http://localhost:5000/predict")
print("Use json")
print("{")
print("    \"quote\": \"Hi Millhouse\"")
print("}")

app = Flask(__name__)

@app.route('/hello')
def hello_world():
    return "hello world"

@app.route('/predict', methods=["POST"])
def predict_post():
    quote = request.data.decode('utf-8')
    return predict_from_string(quote)

# quote = input("Enter a quote from the Simpsons [default: doo]: ")

# if len(quote) == 0:
#     quote = "doo"
# predict_from_string(quote)

if __name__ == '__main__':
    app.run(host='0.0.0.0')
