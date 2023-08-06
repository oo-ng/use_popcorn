import { useEffect, useState } from "react";
import { tempMovieData } from "./tempMovieData";
import { tempWatchedData } from "./tempMovieData";
import { NavBar } from "./NavBar";
import { Main } from "./Main";
import { SearchBar } from "./SearchBar";
import { Logo } from "./Logo";
import { AllMoviesList } from './AllMoviesList';
import { Container } from './Container';





const average = (arr) => {
  const avg = arr.reduce((acc, cur) => acc + cur / arr.length, 0);
  return parseFloat(avg.toFixed(1));
};


  const KEY="a5819d7f"

const App=()=> {
  
  const[selectedMovie, setSelectedMovie]=useState("");
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const[errorMessage, setErrorMessage]=useState("");
  const[loading, setLoading] = useState(false);
  const[movieNotFound, setMovieNotFound]= useState(false);
  
  useEffect(()=>{
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
        console.log("movieData: ", movieData);
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
    
    
  },[query, setSelectedMovie])

  

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.Runtime));

  return (
    <>
      <NavBar>
        <Logo/>

        <SearchBar 
          movies={movies}
          query={query} 
          setQuery={setQuery}
        />

      </NavBar>

      <Main>
        <AllMoviesList 
              selectedMovie={selectedMovie}
              movieNotFound={movieNotFound}
              errorMessage={errorMessage}
              loading={loading}
              movies={movies}
              isOpen1={isOpen1}
              setIsOpen1={setIsOpen1}
              setSelectedMovie={setSelectedMovie}

        />

        <Container
          selectedMovie={selectedMovie}
          isOpen2={isOpen2}
          watched={watched} 
          avgImdbRating={avgImdbRating}
          avgUserRating={avgUserRating} 
          avgRuntime={avgRuntime}
          setIsOpen2={setIsOpen2}
          setWatched={setWatched}
          setSelectedMovie={setSelectedMovie}
        />

        
      </Main> 
      
      

      
    </>
  );
}


export default App;
