import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StarRating } from './StarRating';
import { useState } from 'react';
import { RatingCommentBox } from './RatingCommentBox';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

    // <RatingCommentBox height={150} width={350}/>

    // <StarRating 
    // MaxStars={10} 
    // messages={["Terrible", // Index 0
    // "Very Bad", // Index 1
    // "Bad",      // Index 2
    // "Below Average", // Index 3
    // "Average",  // Index 4
    // "Above Average", // Index 5
    // "Good",     // Index 6
    // "Very Good", // Index 7
    // "Great",    // Index 8
    // "Excellent" /*Index 9*/]}
    // />
    

    

);

