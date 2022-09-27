import React from 'react' 
//socket.io
import io from "socket.io-client"; 
const socket = io.connect("http://localhost:3001");

function SendOff(props) {
    socket.emit('exiting', props.data)
    return(<div className='send-off-main'>bye</div>)
}

export default SendOff;