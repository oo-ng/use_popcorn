import { useState } from "react";
import { tempMovieData } from "./tempMovieData";
import { tempWatchedData } from "./tempMovieData";
import { NavBar } from "./NavBar";
import { Main } from "./Main";
import { SearchBar } from "./SearchBar";
import { Logo } from "./Logo";
import { AllMoviesList } from './AllMoviesList';
import { MoviesWatchedList } from './MoviesWatchedList';




const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const App=()=> {
  
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

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
              movies={movies}
              isOpen1={isOpen1}
              setIsOpen1={setIsOpen1}
        />

        <MoviesWatchedList
            isOpen2={isOpen2}
            setIsOpen2={setIsOpen2}
            watched={watched} 
            avgImdbRating={avgImdbRating}
            avgUserRating={avgUserRating} 
            avgRuntime={avgRuntime}
        />

        
      </Main> 
      
      

      
    </>
  );
}


export default App;
