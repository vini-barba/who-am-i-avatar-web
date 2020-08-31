import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--secondary);

  border: 1px solid var(--grey);

  padding: 15px;
  border-radius: 8px;
`;

export const Title = styled.strong`
  font-size: 20px;
  line-height: 30px;
`;

export const EmailInput = styled.input`
  background: var(--white);
  color: var(--secondary);

  font-size: 20px;
  line-height: 30px;

  padding: 5px 10px;
  margin: 15px;
  border-radius: 5px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 15px;
`;

export const CreateSession = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CreateButton = styled.button`
  background: var(--background);
  color: var(--secondary);
  font-weight: 700;

  font-size: 15px;
  line-height: 20px;

  padding: 5px 15px;
  margin-bottom: 10px;

  border-radius: 8px;
  cursor: pointer;
`;
export const CreateInput = styled.input`
  font-size: 12px;
  line-height: 18px;

  border: 1px solid var(--background);
  color: var(--background);
  border-radius: 5px;

  padding: 2px 5px;
  margin: 5px;
  width: 90%;
  cursor: copy;
`;

export const JoinSession = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const JoinButton = styled.button`
  border: 1px solid var(--background);
  color: var(--background);
  font-weight: 700;

  font-size: 15px;
  line-height: 20px;

  padding: 5px 15px;
  margin-bottom: 10px;

  border-radius: 8px;
  cursor: pointer;
`;

export const JoinInput = styled.input`
  font-size: 12px;
  line-height: 18px;

  border: 1px solid var(--background);
  color: var(--background);
  border-radius: 5px;
  width: 90%;
  padding: 2px 5px;
  margin: 5px;
`;

export const EnterButton = styled.button`
  padding: 10px;
  margin: 15px;
  border: 1px solid var(--check);
  color: var(--check);
  border-radius: 10px;

  font-size: 15px;
  line-height: 20px;

  font-weight: 700;

  cursor: pointer;
`;

export const CopiedMessage = styled.span`
  font-size: 12px;
  color: var(--white);
  font-weight: bold;
`;
