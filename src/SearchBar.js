import React from 'react'
import { useState } from 'react'

export const SearchBar =({query,setQuery,movies})=>{

    return (
        <>
            <input
                className="search"
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />

                <p className="num-results">
                Found <strong>{movies.length}</strong> results
                </p>
        </>
        
    )
}