import React, { useEffect, useState } from "react";
import { StarRating } from "./StarRating";
import { RatingCommentBox } from "./RatingCommentBox";
import { LoadingMessage } from "./Helper_components";

const KEY="a5819d7f";



export const MovieDetailCard=({selectedMovie, setSelectedMovie})=>{

    const [allDetails, setAllDetails]=useState({});
    const [leaveComment, setLeaveComment]=useState(false);
    const [loading, setLoading]=useState(true);
    const[errorMessage, setErrorMessage]=useState("");
    const [usePopcornRating, setUsePopcornRating]=useState();
    const [usePopcornComment, setUsePopcornComment]=useState();
    


    useEffect(()=>{
        const getDetails = async() =>{
            try{
                setLoading(true);
                const response = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovie.imdbID}`);

                if(!response.ok){
                    throw new Error("Error occured!")
                }
            const movieDetail = await response.json();
            setAllDetails(movieDetail);

            }catch(error){
                setErrorMessage(error.message);
                setSelectedMovie("")
            }

            finally{
                setLoading(false);
            }
            
        }

        getDetails();

    },[selectedMovie])

    return(
        <div>
            
            <button onClick={()=>setSelectedMovie("")} className="btn-back">&larr;</button>

            
            
            {loading?<LoadingMessage/>: 
            <>
                <div className="details">
                    <header>
                        <img src={allDetails.Poster} alt={`${allDetails.Title} poster`} />
                        <div className="details-overview">
                            <h2>{allDetails.Title}</h2>
                            
                            <p>
                                {allDetails.Released}&bull; {allDetails.Runtime}
                            </p>

                            <p>
                                {allDetails.Genre}
                            </p>
                            <p>
                                <span>⭐</span>{allDetails
                                .imdbRating} IMDB rating
                            </p>
                        </div>                        
                    </header>

                    <div className="rating">
                        <StarRating size={32} onSetRatingExternal={setUsePopcornRating}/>
                        <button className="btn-back-comment" onClick={()=>setLeaveComment((leaveComment)=>!leaveComment)}>{`${leaveComment?"Back":"Leave a comment"}`}</button>
                        {leaveComment&&<RatingCommentBox/>}
                    </div>

                    <section>
                            <p>
                                <em>
                                    {allDetails.Plot}
                                </em>
                            </p>
                            <p>
                                Starring {allDetails.Actors}
                            </p>
                            <p>
                                Directed By: {allDetails.Director}
                            </p>
                        </section>

                </div>
                
            </>
            
            }

                
            

        </div>
    )
    
}