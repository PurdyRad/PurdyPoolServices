import React from 'react';
import { Link } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';


const NavBar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}

export default NavBar
