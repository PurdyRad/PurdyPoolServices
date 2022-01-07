import React from 'react';
import styled from 'styled-components';
import logo from '../../photos/PurdyPoolLogo.jpeg';
import Hamburger from './Hamburger';
import { useNavigate } from 'react-router-dom';

const Nav = styled.nav`
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
`;

const Image = styled.img`
    display: block;
    border-radius: 5px;
`



const NavBar = () => {
    let navigate = useNavigate();

    const homer = () => {
        navigate('/')
    };
    
    return (
        <>
            <Nav>
                <Image src={logo} onClick={homer} alt='Purdy Pool Services logo' />
                <Hamburger />
            </Nav>
            </>
    )
}

export default NavBar
