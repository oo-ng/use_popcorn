import React from "react";
import { BoxForMain } from "./BoxForMain";
import { MovieCard } from "./MovieCard";

export const AllMoviesList =({isOpen1, setIsOpen1, movies})=>{


    return(
        <BoxForMain stateToOpen={isOpen1}
        setStateToOpen={setIsOpen1}>
            <ul className="list">
                {movies?.map((movie) => 
                    <MovieCard 
                    key={movie.imdbID}
                    movie={movie}
                    />
                )}
                </ul>
            </BoxForMain>
    )
}