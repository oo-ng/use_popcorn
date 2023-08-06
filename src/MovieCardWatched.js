import React from "react";

export const MovieWatchedBox =({watched, avgImdbRating, avgUserRating, avgRuntime, setWatched})=>{
    

      
    
    return (
        
      <div >
          <div className="summary">
              <h2>Movies you watched</h2>
              <div>
                <p>
                  <span>#️⃣</span>
                  <span>{watched.length} movies</span>
                </p>
                <p>
                  <span>⭐️</span>
                  <span>{avgImdbRating}</span>
                </p>
                <p>
                  <span>🌟</span>
                  <span>{avgUserRating}</span>
                </p>
                <p>
                  <span>⏳</span>
                  <span>{avgRuntime} min</span>
                </p>
              </div>
          </div>
            
            <ul className="list">
                    {watched.map((Watchedmovie) => (
                      <MovieCardWatched 
                      key={Watchedmovie.imdbID}
                      Watchedmovie={Watchedmovie}
                      watched={watched}
                      setWatched={setWatched}
                      />
                    ))}
                </ul>
            
        </div>
           
           
    )

}

const MovieCardWatched =({Watchedmovie,watched,setWatched})=>{

  const handleDeleteClick = (event) =>{
    let IDToDelete = Watchedmovie.imdbID;
    const updatedWatched = watched.filter((movie)=>
      movie.imdbID!==IDToDelete);
      setWatched(updatedWatched);
    
  }

    return( 
      <li>
          <img src={Watchedmovie.Poster} alt={`${Watchedmovie.Title} poster`} />
          <h3>{Watchedmovie.Title}</h3>
          <div>
          <p>
              <span>⭐️</span>
              <span>{Watchedmovie.imdbRating}</span>
          </p>
          <p>
              <span>🌟</span>
              <span>{Watchedmovie.userRating}</span>
          </p>
          <p>
              <span>⏳</span>
              <span>{Watchedmovie.Runtime} min</span>
          </p>
          <button onClick={handleDeleteClick} className="btn-delete">
            ❌
          </button>
          </div>
      </li>
    )
}