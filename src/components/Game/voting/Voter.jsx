import React from 'react'
import './Voter.css' 

function Voter(props) {
    const players = props.instance.map((el, i) => {return(<div key={i} className='others-bar'>
        <div className='box'><h4>{el.player}</h4></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
    </div>)})
    return(<div className='vote-main'>
      
        {players}
    </div>)
}

export default Voter;