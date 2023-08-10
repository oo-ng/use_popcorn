import { useState, useEffect } from "react";

export const useKey =(key, action)=>{

    const handleEscKeyDown = (event)=>{
        if(event.code.toLowerCase===key.toLowerCase){
        action("");
        }
        
    }

    useEffect(()=>{
        

        document.addEventListener("keydown", handleEscKeyDown);

        const cleanUp=()=>{
            document.removeEventListener("keydown", handleEscKeyDown);
            console.log("Hi");
        }
    
    return cleanUp
    }, [ action, key])
}


