import React from 'react';

const Results = ({ score, questions, incorrect }) => {
    return (
        <div>
            <h1>
                You Scored: [{score} / {questions.length}]
            </h1>

            <h4>Question Recap:</h4>
            <ul>
                {questions.map((questionNum, index) => {
                    return incorrect.includes(index) ? (
                        <li key={index}>
                            Question {index + 1}: {questionNum.feedback_false}
                        </li>
                    ) : (
                        <li key={index}>
                            Question {index + 1}: {questionNum.feedback_true}
                        </li>
                    );
                })}
            </ul>
            <a href='/quiz'>Want to Retake?</a>
        </div>
    );
};

export default Results;
