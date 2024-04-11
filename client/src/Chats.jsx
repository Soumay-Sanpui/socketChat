import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ScrollToBottom from "react-scroll-to-bottom";

const Chats = ({socket, username, room}) => {
  
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if(message !== "") {
        const messageData = {
            room: room,
            id: uuidv4(), // Use uuidv4 method to generate a random UUID
            author: username,
            message: message,
            time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
        }

        await socket.emit("send_message", messageData);
        setMessageList((list)=> [...list, messageData]);
        setMessage("");
    }
  }

  useEffect(()=> {
    socket.on("receive_message", (data) => {
        setMessageList((list)=> [...list, data]);
        console.log(data);
    })
  }, [socket])

  return (
    <div className="shadow-md rounded-md">
        <div className="chat-body overflow-y-scroll h-[65vh]">
            <ScrollToBottom>
            {messageList.map((message)=>{
                return (
                    <div className="message" key={message.id}>
                        <div className="bg-white rounded-md mb-2 p-2 w-max">
                            <div className="message-content">
                                <p>{message.message}</p>
                            </div>
                            <div className="message-meta flex text-[10px] gap-4">
                                <p>{message.time}</p>
                                <p>{message.author}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            </ScrollToBottom>
        </div>
        <div className="chat-footer">
            <input value={message} type="text" placeholder="message" onChange={(e)=> {setMessage(e.target.value)}} onKeyDown={(e)=> {e.key === "Enter" && sendMessage()}}/>
            <button onClick={sendMessage}>&#9658;</button>
        </div>
    </div>
  )
}

export default Chats;
