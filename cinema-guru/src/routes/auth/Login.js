import React from "react";
import "./auth.css";

const Login = ({ username, password, setUsername, setPassword, handleSubmit }) => {
    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />

            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <button type="submit">Sign In</button>
        </form>
    );
};

export default Login;
