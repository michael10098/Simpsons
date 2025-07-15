import { useEffect, useState } from 'react';

function PredictionsPage() {
const [predictions, setPredictions] = useState("");

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
    setPredictions(data)
  })
 }

 fetchPredictions();
}, []);

return (
 <div>
  <h1>Predictions</h1>
  <ul>
   {predictions}
  </ul>
 </div>
);
}

export default PredictionsPage;