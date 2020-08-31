import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Form,
  EmailInput,
  ActionsContainer,
  CreateButton,
  CreateSession,
  CreateInput,
  JoinButton,
  JoinInput,
  JoinSession,
  Title,
  EnterButton,
  CopiedMessage,
} from './styles';
import api from '../../services/api';

const LobbyRoom: React.FC = () => {
  const createInputRef = useRef<any>(null);
  const formRef = useRef<any>(null);

  const [create, setCreate] = useState(true);
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [user, setUser] = useState<any>(null);
  const history = useHistory();

  async function getUser() {
    const valid = formRef.current.reportValidity();
    if (valid !== true) {
      setUser(null);
      return null;
    }
    const fetchedUser = await api
      .get(`/users/${email}`)
      .then((res) => res.data);

    if (fetchedUser !== null) {
      await setUser(fetchedUser);
      localStorage.setItem('userId', fetchedUser._id);
      return fetchedUser;
    }

    const createdUser = await api
      .post('/users', {
        user: {
          email,
        },
      })
      .then((res) => res.data);

    await setUser(createdUser);
    localStorage.setItem('userId', createdUser._id);
    return createdUser;
  }

  async function handleCreateRoom() {
    setShowCopiedMessage(false);
    setCreate(true);
    if (user === null) return;

    const roomData = await api
      .post('/rooms', {
        room: { player1: user._id },
      })
      .then((res) => res.data);

    setRoomCode(roomData._id);
  }

  async function handleJoinRoom() {
    setCreate(false);
    setShowCopiedMessage(false);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setShowCopiedMessage(false);
    e.preventDefault();
    if (create === false) {
      if (user === null) return;
      await api
        .put(`/rooms/${roomCode}`, {
          room: {
            player2: user._id,
          },
        })
        .then((res) => res.data);
    }
    sessionStorage.setItem('roomId', roomCode);
    history.push(`/game/${roomCode}`);
  }

  function handleCopyToClipboard(
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) {
    createInputRef.current.select();
    document.execCommand('copy');
    setShowCopiedMessage(true);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Title>Start a new game</Title>
        <EmailInput
          type='email'
          required
          placeholder='example@email.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => getUser()}
        />
        <ActionsContainer>
          <CreateSession>
            <CreateButton type='button' onClick={() => handleCreateRoom()}>
              Create Room
            </CreateButton>
          </CreateSession>

          <JoinSession>
            <JoinButton type='button' onClick={() => handleJoinRoom()}>
              Join Room
            </JoinButton>
          </JoinSession>
        </ActionsContainer>

        {create === true ? (
          <>
            <CreateInput
              readOnly
              placeholder='Copy code for room'
              ref={createInputRef}
              value={roomCode}
              onClick={(e) => handleCopyToClipboard(e)}
            />
            {showCopiedMessage && <CopiedMessage>copied</CopiedMessage>}
          </>
        ) : (
          <JoinInput
            placeholder='Insert room code here'
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
          />
        )}
        <EnterButton type='submit'>Enter room</EnterButton>
      </Form>
    </Container>
  );
};

export default LobbyRoom;
