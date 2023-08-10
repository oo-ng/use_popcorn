import React, { useEffect } from "react";
import { BoxForMain } from "./BoxForMain";
import { MovieWatchedBox } from "./MovieCardWatched";
import { MovieDetailCard } from "./MovieDetailCard";

export const Container =({isOpen2, setIsOpen2, setWatched, watched, avgImdbRating, avgUserRating, avgRuntime, selectedMovie, setSelectedMovie})=>{

    

    const handleAddWatched=(movie)=>{        
        setWatched((watched)=>{
            watched=[...watched,movie];
            return watched;
        });

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
                        onAddToWatch={handleAddWatched}
                        />
                    }
                    
                    
                </div>

                

            </BoxForMain>
            
        
        </>
    )
}
