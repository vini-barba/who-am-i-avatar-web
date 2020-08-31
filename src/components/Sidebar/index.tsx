import React from 'react';

import { Container, CharacterArea, Title, Image } from './styles';
import Chat from '../Chat';
import { ITile } from '../Tile';

interface props {
  randomChar: ITile;
}
const Sidebar: React.FC<props> = ({ randomChar }) => {
  console.log(randomChar);

  return (
    <Container>
      <CharacterArea>
        <Title>{randomChar?.name || 'awaiting'}</Title>
        <Image src={randomChar?.image} />
      </CharacterArea>
      <Chat />
    </Container>
  );
};

export default Sidebar;
