import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Authentication from "./routes/auth/Authentication";
import Dashboard from "./routes/dashboard/Dashboard";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userUsername, setUserUsername] = useState("");

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            axios
                .post("/api/auth/", {}, { headers: { Authorization: `Bearer ${accessToken}` } })
                .then((response) => {
                    setIsLoggedIn(true);
                    setUserUsername(response.data.username);
                })
                .catch((error) => {
                    console.error("Authentication failed", error);
                    setIsLoggedIn(false);
                });
        }
    }, []);

    return isLoggedIn ? (
        <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
    ) : (
        <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
    );
}

export default App;
