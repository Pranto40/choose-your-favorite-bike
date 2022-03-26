import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div>
                <h1 className='logo'>
                    Bike Shop
                </h1>
            </div>
            <div className="header-links">
                <ul><li>Home</li></ul>
                <ul><li>singup</li></ul>
                <ul><li>Cart</li></ul>
            </div>
        </header>
    );
};

export default Header;