import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {


  const [background, setBackground] = useState({r: 0, g: 0, b: 0})

  function changeR(e) {
    if (e.target.value > 255) {
      e.target.value = e.target.value.slice(0,e.target.value.length - 1)
    }
    if (e.target.value < 0) {
      e.target.value = 0
    }

    setBackground({r: e.target.value, g: background.g, b: background.b})
}

  function changeG(e) {
    if (e.target.value > 255) {
      e.target.value = e.target.value.slice(0,e.target.value.length - 1)
    }
    if (e.target.value < 0) {
      e.target.value = 0
    }

    setBackground({r: background.r, g: e.target.value, b: background.b})
  }

  function changeB(e) {
    if (e.target.value > 255) {
      e.target.value = e.target.value.slice(0,e.target.value.length - 1)
    }
    if (e.target.value < 0) {
      e.target.value = 0
    }

    setBackground({r: background.r, g: background. g, b: e.target.value})
  }

  function submit() {
    var rgb = "rgb(" + background.r + "," + background.g + "," + background.b + ")"
    document.getElementById("help").style.backgroundColor = rgb;
    
  }

  return (
    <div className="App">
      <header className="App-header" id = "help">
        <div class = "fields">

        <form class="container">
          <label class="label">
            <div>
              R
            </div>
            <input type="number" min="0" max="255" class="input" onChange={changeR}/>
            
          </label>
          <label class="label">
            <div>
              G
            </div>
            <input type="number" min="0" max="255" class="input" onChange={changeG}/>
            
          </label>
          <label class="label">
            <div>
              B
            </div>
            <input type="number" min="0" max="255" class="input" onChange={changeB}/>
            
          </label>
        </form>
          
        </div>
        <button class = "button" onClick={submit}>
          Color Me Background Matey!
        </button>
      </header>
    </div>
  );
}

export default App;
