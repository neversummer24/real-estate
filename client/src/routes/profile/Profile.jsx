import React from 'react';
import List from '../../components/list/List';
import "./profile.scss";
import Chat from '../../components/chat/Chat';

function Profile() {
  return (
    <div className="profilePage">
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Profile</h1>
                    <button>Update</button>
                </div>

                <div className="info">
                    <span> Avatar: 
                        <img src="/user.img" alt="" />
                    </span>

                    <span> Name: 
                        <h1>John Doe</h1>
                    </span>

                    <span> Email: 
                        <h1>1Kx0K@example.com</h1>
                    </span>
                </div>

                <div className="title">
                    <h1>My Listings</h1>
                    <button>Add a listing</button>
                </div>

                <List />


                <div className="title">
                    <h1>Saved Listings</h1>
                </div>
            </div>
        </div>

        <div className="chatContainer">
            <div className="wrapper">
                <Chat />
            </div>
        </div>
    </div>
  )
}

export default Profile
