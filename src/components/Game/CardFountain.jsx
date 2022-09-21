import React from 'react' 
import './Game.css'
import Omen from './Omen'
function CardFountain(props) {
    const displayOmens = props.cards.map((el, i ) => {return(<Omen key={i} omen={el}></Omen>)})
    return(<div className='card-main'>
       
      {displayOmens}
       
    </div>)
}

export default CardFountain;