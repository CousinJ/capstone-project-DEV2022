import React from 'react' 
//socket.io
import io from "socket.io-client"; 
const socket = io.connect("http://localhost:3001");

function SendOff(props) {
    // check to see if warlocks won or if all of them are dead.
    socket.emit('exiting', props.data)
    return(<div className='send-off-main'>bye</div>)
}

export default SendOff;