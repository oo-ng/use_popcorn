import React from "react";

export const BoxForMain =({children, stateToOpen, setStateToOpen})=>{

    return(
        <div className="box">
            <button className="btn-toggle"
            onClick={() => setStateToOpen((open) => !open)}>
                {stateToOpen ? "–" : "+"}
            </button>
            {stateToOpen&&(
                children
            )}
        </div>
    )
}
