import React from 'react';
import './App.css';
import quizData from './data/data.json';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from './components/Home';
import Quiz from './components/Quiz';

function App() {
    return (
        <Switch>
            <Route exact path='/'>
                <Home
                    title={quizData.title}
                    description={quizData.description}
                />
            </Route>
            <Route path='/quiz'>
                <Quiz
                    questions={quizData.questions_answers}
                    score={quizData.score}
                />
            </Route>
        </Switch>
    );
}

export default App;
