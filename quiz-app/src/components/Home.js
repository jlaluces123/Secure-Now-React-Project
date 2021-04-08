import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ title }) => {
    return (
        <div>
            <h1>Welcome To The Quiz</h1>
            <Link to='/quiz/'>Start {title}</Link>
        </div>
    );
};

export default Home;
