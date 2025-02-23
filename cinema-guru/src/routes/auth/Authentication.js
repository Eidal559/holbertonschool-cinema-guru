import React, { useState } from "react";
import axios from "axios";
import "./auth.css";
import Login from "./Login";
import Register from "./Register";

function Authentication({ setIsLoggedIn, setUserUsername }) {
    const [_switch, setSwitch] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = _switch ? "/api/auth/login" : "/api/auth/register";
        
        try {
            const response = await axios.post(url, { username, password });
    
            console.log("API Response:", response.data); // ✅ Log API response
    
            const token = response.data.token || response.data.accessToken;
            if (token) {
                localStorage.setItem("accessToken", token);
                setUserUsername(username);
                setIsLoggedIn(true);
            } else {
                throw new Error("Token not found in response");
            }
        } catch (error) {
            console.error("Authentication failed:", error.response?.data || error.message);
            alert(`Authentication failed: ${error.response?.data?.message || "Please try again."}`);
        }
    };
    

    return (
        <div className="auth-container">
            <div className="auth-header">
                <button className={_switch ? "active" : ""} onClick={() => setSwitch(true)}>
                    Sign In
                </button>
                <button className={!_switch ? "active" : ""} onClick={() => setSwitch(false)}>
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
                        handleSubmit={handleSubmit} // ✅ Ensure handleSubmit is passed
                    />
                ) : (
                    <Register
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        handleSubmit={handleSubmit} // ✅ Ensure handleSubmit is passed
                    />
                )}
            </div>
        </div>
    );
}

export default Authentication;
