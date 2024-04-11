
import './App.css'
import io from "socket.io-client"
import { useState } from 'react'
import Chats from './Chats';

const socket = io.connect("http://localhost:3000");
function App() {
  const [username, setUserName] = useState("");
  const [roomId, setRoomId] = useState("");
  const  [showChats, setShowChats] = useState(false);
  

  const joinRoom = () => {
    if(username !== "" && roomId !== "") {
      socket.emit("join_room",roomId);
      setShowChats(true);
    }
  }

  return (
    // remove the strict mode in react as it renders the page twice in development mode.
    <div className="bg-[#D7FFAB] border-2 border-black  w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-[#320D6D] text-5xl text-center font-bold m-4">Chat App</h1>
    <div className="w-1/2">
      {!showChats ? (
        <div className="w-full border border-black p-5 h-80 shadow-lg rounded-md flex flex-col it">
          <input className="border " type='text' onChange={(e)=>{setUserName(e.target.value)}} placeholder='name'/>
          <input className="border " type='text' onChange={(e)=>{setRoomId(e.target.value)}} placeholder='roomId'/>
          <button onClick={joinRoom}>Join room</button>
        </div>
      ):(
        <Chats socket={socket} username={username} room={roomId}/>
      )
    }
    </div>
    </div>
  )
}

export default App
