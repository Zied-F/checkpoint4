import React from 'react';
import './App.css';
import image from './assets/imageInSrc.jpg';
import './style.css'

function App() {
  return (
    <div className="App">
           <div style = {{
           border : "solid 1px black",
           maxWidth : "100vw"
           }}>
                <h1 className ="title">Your name here</h1>
                <img src={image} alt ="src" />
                <br />
                <img src = "/imageInPublic.jpg" alt ="public" />

          </div>
          
          <video width="320" height="240" controls>
          <source src="/video.mp4" type="video/mp4"></source>
          </video>
    </div>
  );
}

export default App;
