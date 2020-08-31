import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid var(--grey);
  border-radius: 5px;
  background: var(--search);

  padding: 15px;
  margin: 15px;
  flex: 1;
  max-height: 42vh;
  width: 90%;
  overflow-y: scroll;
  display: block;
  @media (min-width: 2500px) {
    max-height: 50vh;
  }
`;
