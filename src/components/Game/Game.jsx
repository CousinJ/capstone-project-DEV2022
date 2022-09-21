import React from 'react'
import './Game.css'
import SidePanel from './SidePanel';
import CardFountain from './CardFountain';

import arcane from '../../assets/arcane_adobe_express.svg'
import sword from '../../assets/sword-heart_adobe_express.svg'
import sun from '../../assets/sun_adobe_express.svg'
import lion from '../../assets/lion_adobe_express.svg'
import fire from '../../assets/fire_adobe_express.svg'
import eye from '../../assets/crown-eye_adobe_express.svg'
import prosperity from '../../assets/prosperity_adobe_express.svg'
import stag from '../../assets/white-stag_adobe_express.svg'
import serpent from '../../assets/serpent_adobe_express.svg'


function Game(props) {

    return(<div className='game-div'> 
        <SidePanel data={props.data}></SidePanel>
        <CardFountain cards={[arcane, sword, sun, lion, fire, eye, prosperity, stag, serpent ]}></CardFountain>
        
        
    </div>)

}
export default Game;