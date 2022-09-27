import React, {useState} from 'react'
import './SidePanel.css'
import mage from '../../assets/images/MAGE.png'
import rogue from '../../assets/images/ROGUE.png'
import paladin from '../../assets/images/PALADIN.png'
import barbarian from '../../assets/images/BARBARIAN.png'

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
        let image= ''
        if(props.data.turn) {
            if(el.role === 1) {
                color = 'purple'
           }
           if(el.role === 0 ) {
                color = 'white'
           }
   
        } else {
            color = 'white'
        }

       if(el.house === 'Torren') {
        image = mage
       }

       if(el.house === 'Voss') {
        image = rogue
       }
       if(el.house === 'Vinteer') {
        image = paladin
       }
       if(el.house === 'Norvic') {
        image = barbarian
       }

        return(<div style={{color: color}} className='player-box'>
            <div style={{ backgroundRepeat: 'no-repeat' , backgroundSize: '100% 100%', backgroundImage: `url(${image})`}} className='player-name-sq'>{el.id}.{el.player}</div>
            <div className='player-house-sq'>{el.house}</div>
            <div className='player-skill-sq'>{el.skill}</div>
            <div className='player-weapon-sq'>{el.weapon}</div>
        </div>)})

    return( <div className='side-panel'>
        <div className='self-bar'>
            <div className='name-box'>
            <h1>{props.data.player}</h1>
            </div>
        
        <h3>Player {props.data.id}</h3>
        <div className='character-info'>
            {props.data.house} 
            {props.data.skill}
            {props.data.weapon}

        </div>

        <h3>{roleText}</h3>
        <h2>{turnText}</h2>
        
        </div>

        <div className='player-container'>
       
        {playerGallery}
        </div>
    </div>)
}
export default SidePanel;