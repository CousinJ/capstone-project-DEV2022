import React from 'react' 
import './Omen.css'

function Omen(props) {
   
    return(<div className='omen-main'>
          <div onClick={() => {console.log(`${props.omen}`)}} style={{backgroundImage: `url(${props.omen})`}}  className='omen'></div>
    </div>)
}

export default Omen;