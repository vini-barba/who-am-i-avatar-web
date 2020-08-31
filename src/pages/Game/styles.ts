import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 300px;
  grid-template-rows: 46px auto;

  grid-template-areas:
    'statusArea statusArea'
    'boardArea chatArea';
  height: 100vh;

  @media (min-width: 2500px) {
    grid-template-columns: auto 500px;
  }
`;
