import React from "react";
import { useState } from "react";


export const NavBar =({children})=>{

    
    return(
        <>
            <nav className="nav-bar">
                {children}
                
                
            </nav>
        </>
    )
}