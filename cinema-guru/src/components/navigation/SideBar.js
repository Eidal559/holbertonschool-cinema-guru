import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../components.css'; // Ensure this path is correct
import './navigation.css'; // Your navigation-specific styles
import Activity from '../Activity'; // Assuming Activity component exists

const SideBar = () => {
    const [selected, setSelected] = useState('home');
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

    const navigate = useNavigate();

    const setPage = (pageName) => {
        setSelected(pageName);
        switch (pageName) {
            case 'home':
                navigate('/home');
                setShowActivities(false); // Hide activities when navigating to home
                break;
            case 'favorites':
                navigate('/favorites');
                setShowActivities(false); // Hide activities when navigating to favorites
                break;
            case 'watchlater':
                navigate('/watchlater');
                setShowActivities(false); // Hide activities when navigating to watch later
                break;
            case 'activity':
                setShowActivities(!showActivities); // Toggle activities display
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        axios.get('/api/activity')
            .then(response => {
                setActivities(response.data);
            })
            .catch(error => {
                console.error('Error fetching activities:', error);
            });
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className="hamburger" onClick={toggleSidebar}>
                &#9776; {/* This is the hamburger icon */}
            </button>
            {isOpen && (
                <nav className="sidebar">
                    <ul className="sidebar-list">
                        <li onClick={() => setPage('home')} className={selected === 'home' ? 'selected' : ''}>
                            <span className="icon">🏠</span> Home
                        </li>
                        <li onClick={() => setPage('favorites')} className={selected === 'favorites' ? 'selected' : ''}>
                            <span className="icon">⭐</span> Favorites
                        </li>
                        <li onClick={() => setPage('watchlater')} className={selected === 'watchlater' ? 'selected' : ''}>
                            <span className="icon">🕒</span> Watch Later
                        </li>
                        <li onClick={() => setPage('activity')} className={selected === 'activity' ? 'selected' : ''}>
                            <span className="icon">📋</span> Activity
                        </li>
                    </ul>

                    {showActivities && (
                        <ul className="activity-list">
                            {activities.slice(0, 10).map((activity, index) => (
                                <Activity key={index} activity={activity} />
                            ))}
                        </ul>
                    )}
                </nav>
            )}
        </div>
    );
};

export default SideBar;
