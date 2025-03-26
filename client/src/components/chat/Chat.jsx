import React from 'react';
import './chat.scss';
import { useState } from 'react';
function Chat() {
  
  const [chat, setChat] = useState(true);

  
  return (
    <div className="chat">
        <div className="messages">
            <h1>Messages</h1>

            <div className="message">
                <img src="/user.png" alt="" />
                <span>Hi</span>
                <p>Hello</p>
            </div>

        </div>

        { chat && <div className="chatBox">
            <div className="top">
                <div className="user">
                    <img src="/user.png" alt="" />
                    <span>John Doe</span>
                </div>
                <span className='close' onClick={() => setChat(false)}>X</span>
            </div>
            <div className="center">
                <div className="chatMessage">
                    <p>Hello</p>
                    <span>12:00 </span>
                </div>

                <div className="chatMessage own">
                    <p>Hello</p>
                    <span>12:00 </span>
                </div>

                <div className="chatMessage">
                    <p>Hello</p>
                    <span>12:00 </span>
                </div>
            </div>
            <div className="bottom">
                <textarea placeholder='Write something...' className='messageInput'/>    
                <button>Send</button>
            </div>
        </div>}
    </div>
  )
}

export default Chat
