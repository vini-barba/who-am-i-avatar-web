import React, { useRef, useEffect } from 'react';

import { Container } from './styles';
import MessageFromMe from '../MessageFromMe';
import MessagesFromOthers from '../MessagesFromOthers';

export interface messageData {
  id: number;
  from: string;
  text: string;
}

interface props {
  messages: messageData[];
}

const MessagesContainer: React.FC<props> = ({ messages }) => {
  const el = useRef<any>(null);
  function scrollToBottom() {
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      el.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }, 0);
  }
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <Container>
      {messages.map((message) => {
        if (message.from === 'me') {
          return <MessageFromMe key={message.id} message={message} />;
        }
        return <MessagesFromOthers key={message.id} message={message} />;
      })}
      <div id='el' ref={el} style={{ clear: 'both' }} />
    </Container>
  );
};

export default MessagesContainer;
