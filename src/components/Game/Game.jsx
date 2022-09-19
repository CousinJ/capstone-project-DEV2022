import React from 'react'
import './Game.css'
import SidePanel from './SidePanel';


function Game(props) {
    return(<div className='game-div'> 
        <SidePanel data={props.data}></SidePanel>
    </div>)

}
export default Game;