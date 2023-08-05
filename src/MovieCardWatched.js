import React from "react";

export const MovieWatchedBox =({watched, avgImdbRating, avgUserRating, avgRuntime})=>{
    console.log(watched)
    
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
                        />
                    
                    ))}
                </ul>
            
        </div>
           
           
    )

}

const MovieCardWatched =({Watchedmovie})=>{

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
                    <span>{Watchedmovie.runtime} min</span>
                </p>
                </div>
            </li>
    )
}