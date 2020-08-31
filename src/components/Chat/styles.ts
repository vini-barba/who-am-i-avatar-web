import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MessageBox = styled.div`
  display: flex;

  padding: 15px;
  padding-top: 0px;

  width: 100%;
  background: var(--grey);
`;

export const TextArea = styled.textarea`
  border: 1px solid var(--secondary);
  border-radius: 5px;
  width: 100%;

  padding: 5px;
  color: var(--secondary);
  background: var(--white);

  resize: vertical;
`;
export const SendButton = styled.button`
  border: 1px solid var(--secondary);
  border-radius: 5px;
  background: var(--check);
  margin-left: 5px;
  width: 10%;
  padding: 5px;
  color: var(--primary);
`;
