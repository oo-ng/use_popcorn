import React from "react";
import { BoxForMain } from "./BoxForMain";
import { MovieWatchedBox } from "./MovieCardWatched";
import { MovieDetailCard } from "./MovieDetailCard";

export const Container =({isOpen2, setIsOpen2, setWatched, watched, avgImdbRating, avgUserRating, avgRuntime, selectedMovie, setSelectedMovie})=>{

    const handleAddWatch=(movie)=>{
        const check=watched.filter((watched)=>{
            return movie.imdbID.includes(watched.imdbID)
        })
        console.log("check",check);

        
        setWatched((watched)=>[...watched,movie])
        console.log("watched movies", watched)
        
    }

    return(
        <>
            <BoxForMain stateToOpen={isOpen2} setStateToOpen={setIsOpen2}>
            <div>
                
                    {
                    selectedMovie===""?
                        (<MovieWatchedBox 
                            watched={watched} avgImdbRating={avgImdbRating} avgUserRating={avgUserRating} avgRuntime={avgRuntime}
                            setWatched={setWatched}
                            />):

                        <MovieDetailCard 
                        watched={watched}
                        selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}
                        onAddToWatch={handleAddWatch}
                        />
                    }
                    
                    
                </div>

                

            </BoxForMain>
            
        
        </>
    )
}
