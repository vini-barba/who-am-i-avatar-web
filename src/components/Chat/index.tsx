import React, { useState, useEffect } from 'react';

import { Container, MessageBox, TextArea, SendButton } from './styles';
import MessagesContainer, { messageData } from '../MessagesContainer';

import * as io from '../../services/io';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<messageData[]>([]);
  const [message, setMessage] = useState('');
  const [roomId, setRoomId] = useState(sessionStorage.getItem('roomId') || '');

  function handleNewMessages(msg: string) {
    setMessages((messages) => [
      ...messages,
      { from: 'other', text: msg, id: Date.now() },
    ]);
  }

  function sendMessage() {
    setMessages((messages) => [
      ...messages,
      { from: 'me', text: message, id: Date.now() },
    ]);
    const payloadMessage = {
      roomId,
      text: message,
    };
    io.sendMessage(payloadMessage);
    setMessage('');
  }

  function handleKeyboardShortcut(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.keyCode === 13 && !e.ctrlKey) {
      sendMessage();
    }
  }
  useEffect(() => {
    setRoomId(sessionStorage.getItem('roomId') || '');
    setMessages([]);
    io.joinRoom(roomId);
    return () => {
      io.socket.emit('disconnect');
    };
  }, []);

  useEffect(() => {
    io.socket.on('message', (msg: any) => {
      handleNewMessages(msg);
    });
  }, []);
  return (
    <Container>
      <MessagesContainer messages={messages} />
      <MessageBox>
        <TextArea
          rows={3}
          autoFocus
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyDown={handleKeyboardShortcut}
        />
        <SendButton onClick={sendMessage}>+</SendButton>
      </MessageBox>
    </Container>
  );
};

export default Chat;
