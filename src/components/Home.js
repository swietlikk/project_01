import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <HomeThreeColumns />


            <Link to="/login">Oddaj rzeczy</Link>
            <Link to="/register">Zorganizuj zbiórkę</Link>
        </div>
    );
};

export default Home;