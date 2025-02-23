import React from "react";
import "./components.css";

const Activity = ({ activity }) => {
    return (
        <li className="activity-item">
            <p>
                <strong>{activity.user}</strong> added <strong>{activity.movie}</strong> to {activity.action} - <em>{activity.date}</em>
            </p>
        </li>
    );
};

export default Activity;
