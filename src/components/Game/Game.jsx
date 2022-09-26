import React, { useState } from "react";
import "./Game.css";

//components
import SidePanel from "./SidePanel";
import CardFountain from "./CardFountain";
import ProphecyMaker from "./ProphecyMaker";
import ProphecyDisplay from "./ProphecyDisplay";
import Voter from "./voting/Voter";
import Result from "./voting/Result";
//assets  ====  omens
import arcane from "../../assets/arcane_adobe_express.svg";
import sword from "../../assets/sword-heart_adobe_express.svg";
import sun from "../../assets/sun_adobe_express.svg";
import lion from "../../assets/lion_adobe_express.svg";
import fire from "../../assets/fire_adobe_express.svg";
import eye from "../../assets/crown-eye_adobe_express.svg";
import prosperity from "../../assets/prosperity_adobe_express.svg";
import stag from "../../assets/white-stag_adobe_express.svg";
import serpent from "../../assets/serpent_adobe_express.svg";

//socket.io
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");
//===============================================================================
function Game(props) {
  const [playing, setPlaying] = useState(props.data.playing);


  //this is for the voting results...
  const [showingResult, setShowingResult] = useState(false)
  const [playerVotedOut, setPlayerVotedOut]  =useState('')


//this function is to close the result component.
  const okHandler = () => {
    setShowingResult(false)
  }

//sets turn from speaker to council members.
  socket.on("turnt", (arg) => {

    setPlaying(!playing);
  });
// listener for the backend vote system
  socket.on('vote-final', (votedPlayer) => {
    
    if(votedPlayer.name === props.data.player) {
      setPlayerVotedOut('You')
    } else {
      setPlayerVotedOut(votedPlayer.name)
    }
    
    setShowingResult(true)
    
  })

  //prophecy variables to be set 1 2 and 3.
  const [three, setThree] = useState({ one: "", two: "", three: "" });

  return (
    <div className="game-div">
      {showingResult && <Result cb={okHandler} playerVotedOut={playerVotedOut}></Result> }
      <SidePanel instance={props.instance} playing={playing} data={props.data}></SidePanel>

      {props.data.turn === true && (
        <CardFountain
          three={three}
          setThree={setThree}
          cards={[
            arcane,
            sword,
            sun,
            lion,
            fire,
            eye,
            prosperity,
            stag,
            serpent,
          ]}
        ></CardFountain>
      )}
      {props.data.turn === true && (
        <ProphecyMaker three={three}></ProphecyMaker>
      )}

      {props.data.turn === false && <ProphecyDisplay></ProphecyDisplay>}
      {props.data.turn === false && <Voter instance={props.instance}></Voter>}
    </div>
  );
}
export default Game;
