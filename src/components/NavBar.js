import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            </div>
            <a href='tel:+1-407-792-9604'>Call Now</a>

        </div>
    )
}

export default NavBar
