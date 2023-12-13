import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <HomeThreeColumns />
        </div>
    );
};

export default Home;