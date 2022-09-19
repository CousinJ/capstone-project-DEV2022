import React from 'react'

function SidePanel(props) {
    return( <div className='side-panel'>
        <div className='self-bar'>
        <h2>{props.data.player}</h2>
        <h3>Player {props.data.id}</h3>
        </div>

        <div className='player-container'>
            <div className='player-bar'></div>
            <div className='player-bar'></div>
            <div className='player-bar' ></div>
            <div className='player-bar' ></div>
            
        </div>
    </div>)
}
export default SidePanel;