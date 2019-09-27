import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem 0;
  }
`;


