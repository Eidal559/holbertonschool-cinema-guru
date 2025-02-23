import React from "react";
import "./auth.css";

function Login({ username, password, setUsername, setPassword, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <p className="auth-title">Sign in with your account</p>

            <label>Username:</label>
            <input 
                type="text" 
                className="auth-input"
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username"
                required 
            />

            <label>Password:</label>
            <input 
                type="password" 
                className="auth-input"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password"
                required 
            />

            <button type="submit" className="auth-button">Sign In</button>
        </form>
    );
}

export default Login;
