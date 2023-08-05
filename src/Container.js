import React from "react";
import { BoxForMain } from "./BoxForMain";
import { MovieWatchedBox } from "./MovieCardWatched";
import { MovieDetailCard } from "./MovieDetailCard";

export const Container =({isOpen2, setIsOpen2, watched, avgImdbRating, avgUserRating, avgRuntime, selectedMovie, setSelectedMovie})=>{


    return(
        <>
            <BoxForMain stateToOpen={isOpen2} setStateToOpen={setIsOpen2}>
            <div>
                
                    {selectedMovie===""?
                    (<div>
                        <MovieWatchedBox watched={watched} avgImdbRating={avgImdbRating} avgUserRating={avgUserRating} avgRuntime={avgRuntime}/>
                    </div>):
                    <MovieDetailCard selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}/>}
                    
                </div>

                

            </BoxForMain>
            
        
        </>
    )
}
