import React, { useState } from "react";
import "../movies.css"; // Ensure this file exists and styles are defined

const Tag = ({ genre, filter, genres, setGenres }) => {
    const [selected, setSelected] = useState(false);

    const handleTag = () => {
        if (selected) {
            setGenres(genres.filter((g) => g !== genre)); // Remove genre
        } else {
            setGenres([...genres, genre]); // Add genre
        }
        setSelected(!selected);
    };

    return (
        <li className={`tag ${selected ? "selected" : ""}`} onClick={handleTag}>
            {genre}
        </li>
    );
};

export default Tag;
