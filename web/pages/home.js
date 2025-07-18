import Link from 'next/link'
import { Menu } from "../components/Menu.js"

function HomePage() {
 return (
  <div>
   <Menu/>
   <h2>Welcome to Michael Van Hulle's web page.</h2>
   <p>
    Currently I am looking for employment in the Software Engineering field.
    Please see my resume <Link href="/resume" legacyBehavior><a>here</a></Link>
   </p>
   <p>
    Please see some fun projects that I have designed <Link href="/funProjects" legacyBehavior><a>here</a></Link>.
   </p>
   <p>
    My latest project is an Artificial Intelligence (AI) project.  I found the 
    scripts for the Simpsons show.  There are 150,000 lines.  Each line has the 
    the name of the character and what the character said.  The AI model was generated 
    by me.  I run the python script that trains on what the character said.  It uses 
    the BERT (Bidirectional Encoder Representations from Transformers) model.  It 
    is the same model that Google uses for its search engine.  However, my model 
    takes a line of script and tries to predict which character possibility said that 
    line.
   </p>
   <p>
    There are many different technologies that were used to design this project.  
    React.js was used to design this website.  I had serve a backend to this website 
    using Express.js.  This website is running in the cloud using AWS Web Services on 
    an EC2 machine.  I had to containerize this into a docker container.  When the 
    container starts up, it first runs a small linux system that has NodeJS on it.  Then 
    it starts a Python scrpt that loads the model and all of the text transformers and the BERT model.  
    The python script waits on a web socket for requests from the React.js web server application.  
    When someone submits a text script, the React.js web server sends a POST TCP command to the Python script.  
    This is done internally in the Docker container.  I did it this way to avoid having two Docker containers and 
    to avoid CORS rejects over the network (one for python and another for NodeJS).  Essentially the React.js web server acts as its own 
    front end and has a back end that send a request to the Python script.
   </p>
  </div>
 )
}

export default HomePage