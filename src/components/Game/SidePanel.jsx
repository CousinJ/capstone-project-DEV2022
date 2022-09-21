import React, {useState} from 'react'
 let roleText = ''
function SidePanel(props) {
    if(props.data.role === 1) {
        roleText = 'warlock'
    } 
    if(props.data.role === 0) {
        roleText = 'sage'
    }
    return( <div className='side-panel'>
        <div className='self-bar'>
        <h2>{props.data.player}</h2>
        <h3>Player {props.data.id}</h3>
        <h3>{roleText}</h3>

        </div>

        <div className='player-container'>
       
            
        </div>
    </div>)
}
export default SidePanel;