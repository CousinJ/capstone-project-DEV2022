import React, {useState} from 'react'
import io from 'socket.io-client'
const socket = io.connect("http://localhost:3001");


function Loading(props) {
    
   
    
   

        socket.on('start-game', (arg) => {
            console.log(props.data)
            
             for(let i = 0; i < arg.length; i++) {
                if(arg[i].player === props.data.player) {
                    props.cb2({ player: arg[i].player, room: arg[i].room, id: arg[i].id })
                } 
             }
                
               
                
                if(arg.length > 4) {
                
                props.cb('Game')
                
                
            
            }})
        
       
        
    
    return(<div>Waiting for players...
        <button onClick={() => {console.log(props.data)}}>check</button>
        
    </div>)
}

export default Loading;