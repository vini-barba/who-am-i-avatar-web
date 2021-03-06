import React from 'react';

import { Container } from './styles';
import { messageData } from '../MessagesContainer';

interface props {
  message: messageData;
}
const MessagesFromOthers: React.FC<props> = ({ message }) => {
  return <Container>{message.text}</Container>;
};

export default MessagesFromOthers;
