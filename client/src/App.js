import React,{useEffect,useState} from 'react';
import io from 'socket.io-client';
import Home from './component/Home/Home';
const socket=io.connect("http://localhost:3001");


function App() {

  const [message, setmessage] = useState("");
  const [room, setroom] = useState("");

  useEffect(() => {
    socket.on("receive-message",(data)=>{
      alert(data.message);
    })
  }, [socket])
  
  const joinRoom=()=>{
    if(room!=="")
    socket.emit("join-room",room);
    else
    alert("JOIN ROOM")
  }


  const sendMessage=()=>{
    socket.emit("send-message",{room,message})
  }

  return (
    <>

     <Home />
      {/* <input placeholder='join' onChange={(e)=>setroom(e.target.value)}/>
      <button onClick={joinRoom}>Join</button>
      <input placeholder='message' onChange={(e)=>setmessage(e.target.value)}/>
      <button onClick={sendMessage}>Send</button> */}
    </>
  )
}

export default App