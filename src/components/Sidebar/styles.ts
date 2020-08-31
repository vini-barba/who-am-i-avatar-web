import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: var(--secondary);
  grid-area: chatArea;

  width: 100%;
`;

export const CharacterArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.strong`
  padding: 10px;
  color: var(--white);
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 200px;

  @media (min-width: 2500px) {
    max-height: 300px;
  }
`;
