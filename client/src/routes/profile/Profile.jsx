import React from 'react';
import List from '../../components/list/List';
import "./profile.scss";
import Chat from '../../components/chat/Chat';
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../libs/apiRequest";
import { useNavigate } from "react-router-dom";


function Profile() {

    const [error, setError] = useState("");
   
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { currentUser, updateUser } = useContext(AuthContext);

    const handleSubmit = async (e) => {
       
        setLoading(true);
        e.preventDefault();
        const formData = new FormData(e.target);

        const { username, email, password } = Object.fromEntries(formData);

        try {
            const res = await apiRequest.put(`/users/${currentUser.id}`, {
                username,
                email,
                password,
             
            });
            updateUser(res.data);
            navigate("/profile");

        } catch (err) {
            console.log(err);
            setError(err.response.data.message);
        }
    };


  

    return (
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <form onSubmit={handleSubmit}>

                        <div className="title">
                            <h3>User Profile</h3>
                            <button onSubmit={handleSubmit}>Update</button>
                        </div>

                        <div className="info">

                            <div className="item">
                                <label htmlFor="username">Username</label>
                                <input
                                    disabled={loading}
                                    id="username"
                                    name="username"
                                    type="text"
                                   
                                    defaultValue={currentUser.username}
                                />
                            </div>
                            <div className="item">
                                <label htmlFor="email">Email</label>
                                <input
                                    disabled={loading}
                                    id="email"
                                    name="email"
                                    type="email"
                                   
                                    defaultValue={currentUser.email}
                                />
                            </div>
                            <div className="item">
                                <label htmlFor="password">Password</label>
                                <input disabled={loading} id="password" name="password" type="password"  />
                            </div>
                      
                            {error && <span>error</span>}
                        </div>

                    </form>

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
