import { useState, useEffect } from "react"


export const useMovies =(query,handleClose)=>{

    const KEY="a5819d7f";
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage]=useState("");
    const [loading, setLoading] = useState(false);


    useEffect(()=>{
        handleClose();
        
        const controller=new AbortController();
        const MoviesToBeFetched = async ()=>{
          
          try{
            setLoading(true);
            const response= await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, 
            {signal:controller.signal}
            ); 
            
            
    
            if (!response.ok) {
              throw new Error("⛔ERROR⛔  Something is wrong fetching the data");
              
            }
            const movieData=await response.json();
            
            if(movieData.Response==="False"){
              throw new Error ("Movie/Show not found"); 
            }else{
              setMovies(movieData.Search);
              setErrorMessage("");
            }
    
          }catch(error){
            console.error(error.message);
            if(error.name!=="AbortError"){
              setErrorMessage(error.message);
            }
            
            
            setMovies([]);
          }finally{
            setLoading(false);
          }
        }
    
        if(query.length<3){
          setMovies([]);
          setErrorMessage("");
          return;
        }
    
        MoviesToBeFetched();
    
        const cleanUp = () =>{
          controller.abort();
        }
    
        return cleanUp;
        
        
    },[query])
    
    return [movies,errorMessage, loading]
      

}