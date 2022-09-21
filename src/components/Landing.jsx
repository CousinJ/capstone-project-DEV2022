import React, { useState } from "react";
import "./Landing.css";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

function Landing(props) {
  const [playerObject, setPlayerObject] = useState("");
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  const numberHandler = (e) => {
    const result = e.target.value;
    setPlayerObject({ player: text, room: result, id: null });
    setNumber(result);
   
  };

  const textHandler = (e) => {
    const result = e.target.value.replace(/[^a-z]/gi, "");
    setText(result);
    setPlayerObject({ player: result, room: number, id: null, role: null});
   
    
  };

  const submitDataHandler = (e) => {
    e.preventDefault();

    
   
    props.cb2(playerObject)
    socket.emit("initialize-player", playerObject);

    props.cb("Loading");
  };

  return (
    <div className="landing-div">
      LANDING
      <h1>{}</h1>
      <form onSubmit={submitDataHandler} className="landing-form">
        <input  value={text} type="text" onChange={textHandler} placeholder="player"></input>
        <input
        value={number}
          type="number"
          onChange={numberHandler}
          placeholder="lobby #"
        ></input>
        <button type="submit">Play</button>
      </form>
    </div>
  );
}
export default Landing;
