import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: var(--grey);
  grid-area: boardArea;

  width: 100%;
  flex-wrap: wrap;
  padding: 30px 20px 10px 20px;

  @media (min-width: 2500px) {
    align-items: center;
    justify-content: center;
  }
`;

export const BoardTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 5px;

  width: 100%;

  @media (min-width: 2500px) {
    width: 90%;
    grid-gap: 15px;
  }
`;
