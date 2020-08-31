import React, { useState } from 'react';

import { Container, Title, Image } from './styles';

export interface ITile {
  id: number;
  tileUp: boolean;
  name: string;
  image: string;
}

interface tileProps {
  tileData: ITile;
}

const Tile: React.FC<tileProps> = ({ tileData }) => {
  const [tileUp, toggleTile] = useState(tileData.tileUp);
  return (
    <Container tileUp={tileUp} onClick={() => toggleTile(!tileUp)}>
      <Title>{tileData.name}</Title>
      <Image src={tileData.image} />
    </Container>
  );
};

export default Tile;
