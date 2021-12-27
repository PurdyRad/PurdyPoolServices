import React from 'react';
import ImageSlider from './ImageSlider';
import MessageBoard from './MessageBoard';
import styled from 'styled-components';

const Header = styled.h1`
font-family: 'Playfair Display SC', serif;
font-size: 4em;
`;

const Home = () => {
    return (
        <div>
            <Header>Purdy Pool Services</Header>
            <MessageBoard />
            <ImageSlider />
            <div>
                {/* <img /> */}
                <p>Home sweet home</p>
            </div>
        </div>
    )
}

export default Home
