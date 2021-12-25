import React from 'react';
import ImageSlider from './ImageSlider';
import MessageBoard from './MessageBoard';

const Home = () => {
    return (
        <div>
            <h1>Purdy Pool Services</h1>
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
