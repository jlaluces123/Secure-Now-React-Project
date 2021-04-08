import React, { useState, useEffect } from 'react';

const Question = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        let result = e.target.dataset.true;

        if (result === 'true') {
            alert('Correct!');
        } else {
            alert('Incorrect');
        }
    };

    return (
        <div>
            <h1>{props.question.text}</h1>
            <ul>
                {props.question.answers.map((answer) => {
                    return (
                        <li
                            onClick={(e) => handleClick(e)}
                            key={answer.id}
                            data-true={answer.is_true}
                        >
                            {answer.text}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Question;
