import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Results = (props) => {
    useEffect(() => {
        console.log(props.incorrect, props.questions);
    }, []);

    return (
        <div>
            <h1>You Scored: [{props.score}]</h1>
            <a href='/quiz'>Want to Retake?</a>

            <h4>Question Recap:</h4>
            <ul>
                {props.questions.map((questionNum, index) => {
                    {
                        return props.incorrect.includes(index) ? (
                            <li>
                                Question {index + 1}:{' '}
                                {questionNum.feedback_false}
                            </li>
                        ) : (
                            <li>
                                Question {index + 1}:{' '}
                                {questionNum.feedback_true}
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
};

export default Results;
