import { useEffect, useState } from 'react';
import { Menu } from "../components/Menu.js"

function FunProjectsPage() {
  const [predictString, setPredictString] = useState("");
  const [predicted, setPredicted] = useState("");
  const [probabilities, setProbabilities] = useState([]);
  const [imagePath, setImagePath] = useState("/images/MargeSimpson");
  const firstPrediction = "Where's Lisa.";

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
      let data2 = data.replace("Predict string: ", "");
      data2 = data2.substring(0, data2.indexOf(",Predicted: ['"));
      setPredictString(data2);
      let data3 = data.substring(data.indexOf(",Predicted: ['") + 14, data.indexOf("']"));
      let pred = data3;
      setPredicted(pred);
      if (pred == "Bart Simpson") setImagePath("/images/BartSimpson")
        else if (pred == "Grampa Simpson") setImagePath("/images/GrampaSimpson")
        else if (pred == "Homer Simpson") setImagePath("/images/HomerSimpson")
        else if (pred == "Lisa Simpson") setImagePath("/images/LisaSimpson")
        else if (pred == "Marge Simpson") setImagePath("/images/MargeSimpson")
        else if (pred == "Milhouse Van Houten") setImagePath("/images/MilhouseVanHouten")
        else if (pred == "Ned Flanders") setImagePath("/images/NedFlanders")
        else if (pred == "Nelson Muntz") setImagePath("/images/NelsonMuntz")
        else if (pred == "Groundskeeper Willie") setImagePath("/images/GroundskeeperWillie")
      let data4 = data.substring(data.indexOf("']") + 2, data.length - 1);
      data4 = data4.split('\n');
      let probabilityArray = data4.slice(1);
      setProbabilities(probabilityArray);
    })
  }

  useEffect(() => {
    document.getElementById("predictString").value = firstPrediction;
    fetchPredictions();
  }, []);

  return (
      <div>
      <Menu/>
      <h1>Simpsons Who Said That!</h1>
        <ul>
          <label>This is a NLP BERT model that can predict which character of the Simpsons possibly said a quote.  
            This model has been trained on about 150,000 lines of script from each character.
            There are about 6500 different characters in the script.  
            However, to simplify things, 
            only the most popular characters have been trained on this model.
            Go to: <a href="https://planetclaire.tv/quotes/simpsons/">https://planetclaire.tv/quotes/simpsons/</a> to get quotes from Simpsons shows"</label>
            <br/>
            <br/>
          <label>Please enter a quote that one of the characters in the may have said and hit the search button:</label><br></br>
          <textarea cols="40" rows="5" id="predictString"></textarea><br/>
          <input type="submit" onClick={fetchPredictions}></input>
          <p>Predict String: {predictString}</p>
          <p>Predicted: {predicted}</p>
          <img src={imagePath} height="100"></img>
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

export default FunProjectsPage;