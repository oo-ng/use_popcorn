import React from "react";
import { BoxForMain } from "./BoxForMain";
import { MovieCard } from "./MovieCard";
import { ErrorMessage } from './Helper_components'
import { LoadingMessage } from "./Helper_components";



export const AllMoviesList =({isOpen1,loading, movieNotFound, setIsOpen1,errorMessage, movies, selectedMovie, setSelectedMovie})=>{



    return(
        <BoxForMain 
        stateToOpen={isOpen1}
        setStateToOpen={setIsOpen1}
        >
            <ul className= "list list-movies" >
                {/* handle error message, if unable to fetch and if movie/show is not found */}
                {errorMessage&&<ErrorMessage message={errorMessage}/>}
                {/* handle sb loading */}
                {loading?<LoadingMessage/>:(movies?.map((movie) => 
                    <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    setSelectedMovie={setSelectedMovie}
                    />)

                    
                )}
                
                
                </ul>
        </BoxForMain>
    )
}