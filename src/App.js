import React, { useState } from "react";
import io from "socket.io-client";

import Landing from "./components/Landing";
import Loading from "./components/Loading";
import Game from "./components/Game/Game";

import "./App.css";
const socket = io.connect("http://localhost:3001");

function App() {
  const [view, setView] = useState("Landing");
  const [gameData, setGameData] = useState('')
  const [instance, setInstance] =useState('')
    

  return (
    <div className="App">
      {view === "Landing" && <Landing data={gameData} cb2={setGameData} view={view} cb={setView}></Landing>}
      {view === "Loading" && <Loading setInstance={setInstance} data={gameData} cb2={setGameData} view={view} cb={setView}></Loading>}
      {view === "Game" && <Game instance={instance} data={gameData} setData={setGameData}></Game>}
    </div>
  );
}

export default App;
