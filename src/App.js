import React, { useState } from "react";
import "./App.css";
import background from "./img/CR7-LM.jpg";

function App() {
  const [vote, setVote] = useState(0);
  const [ronny, setRonny] = useState(0);
  const [messi, setMessi] = useState(0);
  function clicky() {
    console.log("clicked", vote);
    setMessi(messi + 1);
    setVote(vote + 1);
  }
  function Ronny() {
    setRonny(ronny + 1);
    setVote(vote + 1);
  }
  return (
    <div className="App">
      <img src={background}></img>
      <header className="App-header">
        <h1>Who is the true G.O.A.T...?</h1>
      </header>
      <div className="player-votes">
        <h1>Messi: {messi}</h1>
        <h1>Ronaldo: {ronny}</h1>
      </div>
      <h2>Total Votes: {vote}</h2>
      <div className="">
        <h2>Messi</h2>
        <button onClick={clicky}>G.O.A.T.</button>
        <h2>Ronaldo</h2>
        <button onClick={Ronny}>G.O.A.T.</button>
      </div>
    </div>
  );
}

export default App;
