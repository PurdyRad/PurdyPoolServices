import React from 'react';
import styled from 'styled-components';

const announcement = [
    'Friendly reminder that we will be out of town this week!'
];

const MessageBoard = () => {

    return (
        <MessageContainer>
            <MessageList>
                {announcement.length &&
                <Message>{announcement[0]}</Message>
                }
            </MessageList>
        </MessageContainer>
    )
}

export default MessageBoard

const MessageContainer = styled.div`
margin: auto;
width: 65%;
`;

const MessageList = styled.ul`
background: #f6dcdc;
border-width: thin;
border-radius: 15px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
align-content: space-between; 
`;

const Message = styled.li`
list-style: none;
font-style: oblique;
font-variant: small-caps;
color: #767676;
`;

