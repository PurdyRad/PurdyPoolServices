import React from 'react';
import cleaners from '../photos/PurdyPoolCleaners.jpeg';
import chambers from '../photos/PurdyPoolChamber.jpeg';
import card from '../photos/PurdyPoolCard.jpeg';


const About = () => {
    return (
        <div>

            <div>
                <img src={cleaners} alt='Purdy Pool Cleaners Staff' />
                <div>
                    <h4>Meet the team!</h4>
                    <p>We are Doug & Tracy! We are proud members of the central Florida area and have been heavily involved in the community for over 10 years. We have 5+ years worth of experience serviving pools local to the area.</p>
                    <p></p>
                </div>
            </div>

            <div>
                <p>Our passion is to provide our community with the best service possible. So that they may enjoy the incredible weather of the beautiful Sunshine State, while also being able to relax and cherish time to themselves or with loved ones! Our dedication to our craft has been noticed as not only a favoirte from 7 unique neighborhoods on NextDoor but also through the Chamber of Commerce of Sanford! </p>
                <img src={chambers} alt='Purdy Pool Services Chamber of Commerce Award for 2019' />
            </div>
            <div>
                <img src={card} alt='Purdy Pool Services business card' />
                <p>We take great pride in the work and service we provide for our customers and hope that we can continue to provide a Purdy experience for all current and new customers!</p>
            </div>


        </div>
    )
}

export default About
