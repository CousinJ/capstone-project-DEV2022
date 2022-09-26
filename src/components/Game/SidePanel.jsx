import React, {useState} from 'react'
 let roleText = ''
let turnText = ''
let color = ''
function SidePanel(props) {

       
    

    if(props.data.role === 1) {
        roleText = 'warlock'
    } 
    if(props.data.role === 0) {
        roleText = 'sage'
    }
    if(props.playing) {
        turnText = 'it is your turn'
    }
    if(props.playing === false) {
        turnText = 'NOT YOUR TURN'
    }
   if(props.playing === 'voted') {
    turnText = 'awaiting player  votes...'
   }
    
    const playerGallery = props.instance.map((el) => {
        
        if(el.role === 1) {
             color = 'purple'
        }
        if(el.role === 0 ) {
             color = 'white'
        }

        return(<div style={{color: color}} className='player-box'>{el.id}.{el.player}</div>)})

    return( <div className='side-panel'>
        <div className='self-bar'>
        <h2>{props.data.player}</h2>
        <h3>Player {props.data.id}</h3>
        <h3>{roleText}</h3>
        <h1>{turnText}</h1>
        
        </div>

        <div className='player-container'>
       
        {playerGallery}
        </div>
    </div>)
}
export default SidePanel;