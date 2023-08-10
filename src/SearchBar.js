import React from 'react'
import { useRef } from 'react'
import { useKey } from './useKey'

export const SearchBar =({query,setQuery,movies})=>{

    const inputElement=useRef(null)

    useKey("Enter", ()=>{
        if(document.activeElement=== inputElement.current){return}
        setQuery("");
        inputElement.current.focus();
    })



    return (
        <>
            <input
                className="search"
                ref={inputElement}
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                
                />

                <p className="num-results">
                Found <strong>{movies.length}</strong> results
                </p>
        </>
        
    )
}