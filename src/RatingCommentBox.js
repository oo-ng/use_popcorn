import React, { useState, useEffect } from "react";

export const RatingCommentBox =({width="350",height="150", placeHolder, setSubmitState,colorText="#fff" ,colorOfButton="#6741d9"})=>{
    const [commentText, setCommentText] = useState("");
    const [comment, setComment]=useState("");

    

    const handleSubmission =(event)=>{
        setComment(commentText);
        setCommentText("");
        event.preventDefault();
    }
    
    useEffect(() => {
        if (typeof setSubmitState === "function") {
            setSubmitState(comment);
        }
    }, [comment, setSubmitState]);
    

    const handleTextChange=(event)=>{
        const text=event.target.value;
        setCommentText((comment)=>{
            comment=text;
            return comment;
        })
        
    }
    

    const textBox={
       
        height:`${height}px`,
        width:`${width}px`,
        backgroundColor:"#2b3035",
        border:"none",
        color: `${colorText}`,
        fontFamily:" -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
        fontSize:"1.4rem"
        
    }
    const submitButton={
        color:`${colorText}`,
        backgroundColor:`${colorOfButton}`,
        margin:"5px 0px",
        textAlign:"center",
        padding:"10px 25px",
        alignSelf:"flex-start",
        borderRadius: "20px"
        
    } 
    const container={
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start"
    }


    return(
        <>
            <div style={container}>
                <div>
                <input value={commentText} onChange={handleTextChange} style={textBox} placeholder={placeHolder}  />
                </div>
                <button onClick={handleSubmission} style={submitButton}>
                    SUBMIT
                </button>
            </div>
        </>
        
       

    )
}