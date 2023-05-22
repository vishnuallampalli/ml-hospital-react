
import { createChatBotMessage } from 'react-chatbot-kit';

const OCS = 'Your Consulting Friend';
const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${OCS}`) ],
  botName: OCS,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#FAEBD7',
    },
    chatButton: {
      backgroundColor: '#EE6F1B',
    },
  },
  widgets : [
    {widgetName:'Hello'}
  ]
};

export default config;