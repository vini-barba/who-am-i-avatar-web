import styled, { css } from 'styled-components';

interface tile {
  tileUp?: boolean;
}

export const Container = styled.div<tile>`
  background: var(--white);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ tileUp }) => {
    if (tileUp === true) return '';

    return css`
      opacity: 0.3;
    `;
  }}
`;

export const Title = styled.strong`
  color: var(--primary);
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 100%;
`;
