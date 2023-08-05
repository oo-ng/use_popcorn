import React from "react";



export const MovieCard =({movie, setSelectedMovie})=>{

    const handleClickMovie=(event)=>{
        console.log('movie selected',movie);
        setSelectedMovie(movie);
    }
    
    
    return (
    <li onClick={handleClickMovie}>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div>
            <p>
            <span>🗓</span>
            <span>{movie.Year}</span>
            </p>
        </div>
    </li>
    )

}