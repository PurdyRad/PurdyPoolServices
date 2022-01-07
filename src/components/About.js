import React from 'react';
import cleaners from '../photos/PurdyPoolCleaners.jpeg';
import chambers from '../photos/PurdyPoolChamber.jpeg';
import card from '../photos/PurdyPoolCard.jpeg';
import styled from 'styled-components';

const AboutContainer = styled.div`
display: flex;
flex-direction: column;
`;

const AboutSectionals = styled.div`
display: flex;
flex-basis: auto;
justify-content: center;
padding-top: 25px;
padding-bottom: 25px;
`;

const ImageContainer = styled.img`
border-radius: 10px;
width: 33vw;
`;

const TextContainer = styled.p`
width: 33vw;
color: #484848;
font-size: 2em;
font-family: 'Roboto';
padding: 15px;
`;

const Header = styled.h1`
font-family: 'Playfair Display SC', serif;
font-size: 4em;
`;

const Border = styled.div`
border: solid;
margin-left: 400px;
margin-right: 400px;
color: #71b6ba;
`;

const About = () => {
    return (
        <AboutContainer>
            <Header>Meet the team!</Header>
            <AboutSectionals>
                <ImageContainer src={cleaners} alt='Purdy Pool Cleaners Staff' />
                <TextContainer>We are Doug & Tracy! We are proud members of the central Florida area and have been heavily involved in the community for over 10 years. We have 5+ years worth of experience serviving pools local to the area.</TextContainer>
            </AboutSectionals>
            <Border/>
            <AboutSectionals>
                <TextContainer>Our passion is to provide our community with the best service possible. So that they may enjoy the incredible weather of the beautiful Sunshine State, while also being able to relax and cherish time to themselves or with loved ones! Our dedication to our craft has been noticed as not only a favoirte from 7 unique neighborhoods on NextDoor but also through the Chamber of Commerce of Sanford! </TextContainer>
                <ImageContainer src={chambers} alt='Purdy Pool Services Chamber of Commerce Award for 2019' />
            </AboutSectionals>
            <Border/>
            <AboutSectionals>
                <ImageContainer src={card} alt='Purdy Pool Services business card' />
                <TextContainer>We take great pride in the work and service we provide for our customers and hope that we can continue to provide a Purdy experience for all current and new customers!</TextContainer>
            </AboutSectionals>


        </AboutContainer>
    )
}

export default About
