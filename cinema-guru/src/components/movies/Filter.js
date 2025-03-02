import React from "react";
import "../movies.css";
import Tag from "./Tag";
import SelectInput from "../general/SelectInput"; // Assuming SelectInput exists

const Filter = ({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle }) => {
    const genreList = ["Action", "Drama", "Comedy", "Biography", "Romance", "Thriller", "War", "History", "Sport", "Sci-Fi", "Documentary", "Crime", "Fantasy"];

    return (
        <div className="filter">
            <input type="text" placeholder="Search Movies" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="number" placeholder="Min Year" value={minYear} onChange={(e) => setMinYear(e.target.value)} />
            <input type="number" placeholder="Max Year" value={maxYear} onChange={(e) => setMaxYear(e.target.value)} />
            
            <SelectInput
                options={["Latest", "Oldest", "Highest Rated", "Lowest Rated"]}
                value={sort}
                setValue={setSort}
            />

            <ul className="genre-tags">
                {genreList.map((genre, index) => (
                    <Tag key={index} genre={genre} genres={genres} setGenres={setGenres} />
                ))}
            </ul>
        </div>
    );
};

export default Filter;
