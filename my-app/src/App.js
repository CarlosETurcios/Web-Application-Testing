import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import Display from './Display';

function App() {

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [foul, setFoul] = useState(0);


  const addHit = () => {
    setBalls(0)
    setStrikes(0)
  }
  const addStrikes = () => {
    console.log("addStrikes")
    setStrikes(strikes + 1)
    if (strikes >= 3) {
      setStrikes(0)
    }
  }
  const addBalls = () => {
    console.log("addBalls")
    setBalls(balls + 1)
    if (balls >= 4) {
      setBalls(0)
    }
  }
  const addFoul = () => {
    if (strikes === 0) {
      setStrikes(1)
      setFoul(1)

    } else if (strikes === 1) {
      setStrikes(2)
      setFoul(foul + 1);
    }
  }


  return (
    <div className="App">
      <Dashboard
        addFoul={addFoul}
        addHit={addHit}
        addStrikes={addStrikes}
        addBalls={addBalls}
        balls={balls}
        setBalls={setBalls}
        strikes={strikes}
        setStrikes={setStrikes} />

      <Display
        balls={balls}
        strikes={strikes} />
    </div>
  );
}

export default App;
