import React from 'react'
import Chatbot from 'react-chatbot-kit'
import MessageParser from './MessageParser';
import config from './Config';
import ActionProvider from './ActionProvider';
import './chatBot.css';


const Chat = () => {
    return (
        <><div className='mt-4'>
            <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
                headerText='Chat With Us'
            />
            </div>
        </>
    )
}

export default Chat