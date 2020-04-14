import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="container">
        <h1 className="nav__title">ReactME blog centre</h1>
        <div className="nav__container">
            <NavLink className="nav__links" to="/" exact={true}>Dashboard</NavLink>
            <NavLink className="nav__links" to="/createblog">Create blog</NavLink>
        </div>
    </header>
);

export default Header; 