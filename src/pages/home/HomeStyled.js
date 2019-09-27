import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
  }
`;
