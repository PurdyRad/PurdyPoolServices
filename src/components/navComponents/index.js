import React from 'react';
import styled from 'styled-components';
import logo from '../../photos/PurdyPoolLogo.jpeg';
import { Nav,
     NavLink,
     Bars,
     NavMenu
     } from './navBarElements';

const Image = styled.img`
    border-radius: 5px;
    width: 8vw;
    height: 8vh;
`



const NavBar = () => {
    return (
        <>
            <Nav>
                <Bars />
                    <Image src={logo} alt='Purdy Pool Services logo' />
                <NavMenu>
                    <NavLink to='/' >Home</NavLink>
                    <NavLink to='/about' >About</NavLink>
                    <NavLink to='/contact' >Contact</NavLink>
                    <a href='tel:+1-407-792-9604'>Call Now</a>
                </NavMenu>
            </Nav>
            </>
    )
}

export default NavBar
