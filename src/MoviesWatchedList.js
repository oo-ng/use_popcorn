import React from "react";
import { BoxForMain } from "./BoxForMain";
import { MovieCardWatched } from "./MovieCardWatched";

export const MoviesWatchedList =({isOpen2, setIsOpen2, watched, avgImdbRating, avgUserRating, avgRuntime})=>{


    return(
        <>
            <BoxForMain stateToOpen={isOpen2} setStateToOpen={setIsOpen2}>
            <div className="summary">
                    <h2>Movies you watched</h2>
                    <div>
                    <p>
                        <span>#️⃣</span>
                        <span>{watched.length} movies</span>
                    </p>
                    <p>
                        <span>⭐️</span>
                        <span>{avgImdbRating}</span>
                    </p>
                    <p>
                        <span>🌟</span>
                        <span>{avgUserRating}</span>
                    </p>
                    <p>
                        <span>⏳</span>
                        <span>{avgRuntime} min</span>
                    </p>
                    </div>
                </div>

                <ul className="list">
                    {watched.map((movie) => (
                        <MovieCardWatched 
                        key={movie.imdbID}
                        movie={movie}
                        />
                    
                    ))}
                </ul>

            </BoxForMain>
            
        
        </>
    )
}
