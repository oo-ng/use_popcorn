import React, { useEffect, useState } from "react";
import { StarRating } from "./StarRating";
import { RatingCommentBox } from "./RatingCommentBox";
import { LoadingMessage } from "./Helper_components";

const KEY="a5819d7f";



export const MovieDetailCard=({onAddToWatch,selectedMovie, setSelectedMovie, watched})=>{
    

    const [allDetails, setAllDetails]=useState({});
    const [leaveComment, setLeaveComment]=useState(false);
    const [loading, setLoading]=useState(true);
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const[errorMessage, setErrorMessage]=useState("");
    const [usePopcornRating, setUsePopcornRating]=useState(0);
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

    const InWatchList=()=>{
        let check=watched.filter((watched)=>{
            return selectedMovie.imdbID.includes(watched.imdbID)
        })

        if(check.length===0){
            return false;
        }
        return true;
    }

    const handleAddtoWatchListClick=(event)=>{
        
        setButtonDisabled(true);
        setSelectedMovie("")
        const RuntimeTime= Number(allDetails.Runtime.split(" ").at(0));
        const newWatchedMovie={
            imdbID: allDetails.imdbID,
            Title: allDetails.Title,
            Year: allDetails.Year,
            Poster:allDetails.Poster,
            Runtime:(isNaN(RuntimeTime) ?0:RuntimeTime),
            imdbRating: allDetails.imdbRating,
            userRating:usePopcornRating,
            userComment:usePopcornComment,
        }
        
        if(!InWatchList()){
            onAddToWatch(newWatchedMovie);
        }
        
        
    }
    

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
                        {
                            !(InWatchList())?
                            <StarRating size={32} onSetRatingExternal={setUsePopcornRating}/>:
                            <p className="btn-added">✔  Already In WatchList </p>}
                        

                        {usePopcornRating>0 && <button disabled={isButtonDisabled} onClick={handleAddtoWatchListClick} className={`${isButtonDisabled===false?"btn-add":"btn-added "}`}>
                            {`${isButtonDisabled===false?"Add to WatchList":"✔ Added to WatchList "}`}
                        </button>}


                        <button className="btn-back-comment" onClick={()=>setLeaveComment((leaveComment)=>!leaveComment)}>{`${leaveComment?"Back":"Leave a comment"}`}
                        </button>
                        
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