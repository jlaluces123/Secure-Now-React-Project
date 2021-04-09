import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Results = (props) => {
    return (
        <div>
            <h1>You Scored: [{props.score}]</h1>
            <a href='/quiz'>Want to Retake?</a>

            <span>You Got these questions wrong:</span>
            {props.incorrect.map((incorrect) => {
                console.log('Incorrect: ', incorrect);
            })}
        </div>
    );
};

export default Results;
