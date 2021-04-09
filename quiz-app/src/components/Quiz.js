import React, { useState, useEffect } from 'react';
import Results from './Results';
import { Link } from 'react-router-dom';
// Takes in an array of questions and displays the Question Component

const Quiz = ({ questions }) => {
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [complete, setComplete] = useState(false);
    const [incorrect, setIncorrect] = useState([]);

    useEffect(() => console.log(questions[currentQuestion]), []);

    const handleClick = (isTrue, questionNum) => {
        if (isTrue) {
            setScore(score + 1);
        } else {
            setIncorrect([...incorrect, questionNum]);
        }
        let nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setComplete(true);
        }
    };

    return (
        <div>
            {complete ? (
                <Results
                    score={score}
                    questions={questions}
                    incorrect={incorrect}
                />
            ) : (
                <div>
                    <Link to='/'>Home</Link>
                    <h1>{questions[currentQuestion].text}</h1>
                    <div className='question-options'>
                        {questions[currentQuestion].answers.map((answer) => (
                            <button
                                onClick={() =>
                                    handleClick(answer.is_true, currentQuestion)
                                }
                                key={answer.id}
                            >
                                {answer.text}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
