import React from "react";
import "./auth.css";

const Register = ({ username, password, setUsername, setPassword, handleSubmit }) => {
    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />

            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Register;
