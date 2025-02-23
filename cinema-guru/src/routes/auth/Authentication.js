import React, { useState } from "react";
import axios from "axios";
import "./auth.css";
import Login from "./Login";
import Register from "./Register";

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
    const [_switch, setSwitch] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
    
        const endpoint = _switch ? "/api/auth/login" : "/api/auth/register";
        const payload = { username, password };
    
        try {
            const response = await axios.post(endpoint, payload);
            
            console.log("API Response:", response.data);
    
            if (response.data.token) {
                localStorage.setItem("accessToken", response.data.token);
                setUserUsername(username);
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.error("Authentication error:", error.response);
    
            if (error.response) {
                alert(`Error: ${error.response.data.message || "Authentication failed"}`);
            } else {
                alert("Network error. Check console for details.");
            }
        }
    };
    
    return (
        <div className="auth-container">
            <div className="auth-header">
                <button 
                    className={_switch ? "active" : ""} 
                    onClick={() => setSwitch(true)}
                >
                    Sign In
                </button>
                <button 
                    className={!_switch ? "active" : ""} 
                    onClick={() => setSwitch(false)}
                >
                    Sign Up
                </button>
            </div>

            <div className="auth-form">
                {_switch ? (
                    <Login
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        handleSubmit={handleSubmit} // Pass handleSubmit
                    />
                ) : (
                    <Register
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        handleSubmit={handleSubmit} // Pass handleSubmit
                    />
                )}
            </div>
        </div>
    );
};

export default Authentication;
