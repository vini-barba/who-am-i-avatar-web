import React from 'react';

import { Container, BoardTop } from './styles';

interface props {
  children: any;
}
const Board: React.FC<props> = ({ children }) => {
  return (
    <Container>
      <BoardTop>{children}</BoardTop>
    </Container>
  );
};

export default Board;
