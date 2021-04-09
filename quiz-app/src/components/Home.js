import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ title, description }) => {
    return (
        <div>
            <h1>Welcome To The Quiz</h1>
            <p>{description}</p>
            <Link to='/quiz/'>Start {title}</Link>
        </div>
    );
};

export default Home;
