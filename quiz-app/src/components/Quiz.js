import React, { useState, useEffect } from 'react';
import Question from './Question';

// Takes in an array of questions and displays the Question Component

const Quiz = ({ questions }) => {
    const [score, setScore] = useState(0);

    useEffect(() => {
        console.log(questions);
    }, []);

    return (
        <div>
            <h1>Hello World</h1>
            {questions.map((question) => {
                return <Question key={question.id} question={question} />;
            })}
        </div>
    );
};

export default Quiz;
