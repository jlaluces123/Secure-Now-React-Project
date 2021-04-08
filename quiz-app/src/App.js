import React, { useState, useEffect } from 'react';
import './App.css';

import quizData from './data/data.json';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';

function App() {
    useEffect(() => {
        console.log(quizData);
    }, []);

    return (
        <Switch>
            <Route exact path='/'>
                <Home title={quizData.title} />
            </Route>
            <Route path='/quiz'>
                <Quiz
                    questions={quizData.questions_answers}
                    score={quizData.score}
                />
            </Route>
            <Route path='/results'>
                <Results />
            </Route>
        </Switch>
    );
}

export default App;
