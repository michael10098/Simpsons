import { useEffect, useState } from 'react';

function PredictionsPage() {
  const [predictString, setPredictString] = useState("");
  const [predicted, setPredicted] = useState("");
  const [probabilities, setProbabilities] = useState([])
  const firstPrediction = "Where's Lisa."

  async function fetchPredictions() {
    let predictElement = document.getElementById("predictString")
    let predictInput = predictElement.value;
    fetch('/api/predictions', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: predictInput
    })
    .then((response) => response.text())
    .then((data) => {
      data = data.split(",");
      setPredictString(data[0].replace("Predict string: ", ""));
      setPredicted(data[1].replace("Predicted: ['", "").replace("']", ""));
      let probabilityString = data[2].replace("Probability\n", "");
      let probabilityArray = probabilityString.split("\n");
      setProbabilities(probabilityArray);
    })
  }

  useEffect(() => {
    document.getElementById("predictString").value = firstPrediction;
    fetchPredictions();
  }, []);

  return (
      <div>
      <h1>Predictions</h1>
        <ul>
          <label>Enter a quote that one of the characters in the may have said:</label><br></br>
          <input type="search" id="predictString" />
          <button onClick={fetchPredictions}>Search</button>
          <p>Predict String: {predictString}</p>
          <p>Predicted: {predicted}</p>
          <p>Probabilities: </p>
          <ul>
            {probabilities.map((probability) => (
              <li>
                {probability}
              </li>
            ))}
          </ul>
        </ul>
      </div>
  );
}

export default PredictionsPage;