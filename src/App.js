import {  useState } from "react";
import { NavBar } from "./NavBar";
import { Main } from "./Main";
import { SearchBar } from "./SearchBar";
import { Logo } from "./Logo";
import { AllMoviesList } from './AllMoviesList';
import { Container } from './Container';
import { useMovies } from "./useMovies";
import { useLocalStorage } from "./useLocalStorage";





const average = (arr) => {
  const avg = arr.reduce((acc, cur) => acc + cur / arr.length, 0);
  return parseFloat(avg.toFixed(1));
};


  

const App=()=> {
  
  const[movieNotFound, setMovieNotFound]= useState(false);
  const [selectedMovie, setSelectedMovie]=useState("");
  const [query, setQuery] = useState("");
  const [watched, setWatched] = useLocalStorage([],"watched");
  // const [watched, setWatched] = useState(()=>{
  //   const storedWatchedShows = localStorage.getItem('watched');
  //   return JSON.parse(storedWatchedShows);
  // });

  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const [movies, errorMessage, loading]= useMovies(query, function handleClose(){setSelectedMovie("")})
 

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
