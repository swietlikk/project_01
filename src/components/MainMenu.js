import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
    return (
        <div>
            <Link to="/login">Zaloguj się</Link>
            <Link to="/register">Zarejestruj się</Link>
        </div>
    );
};

export default MainMenu;