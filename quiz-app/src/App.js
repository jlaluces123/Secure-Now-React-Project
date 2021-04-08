import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import quizData from './data/data.json';

function App() {
    useEffect(() => {
        console.log(quizData);
    }, []);

    return <h1>Hello World</h1>;
}

export default App;
