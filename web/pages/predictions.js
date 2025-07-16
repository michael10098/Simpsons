import { useEffect, useState } from 'react';

function PredictionsPage() {
const [predictString, setPredictString] = useState("");
const [predicted, setPredicted] = useState("");
const [probabilities, setProbabilities] = useState([])

useEffect(() => {
 async function fetchPredictions() {

  fetch('/api/predictions', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: "Where's Millhouse"
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

 fetchPredictions();
}, []);

return (
 <div>
  <h1>Predictions</h1>
  <ul>
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