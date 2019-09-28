import styled from 'styled-components';
import { ACCENT_COLOR } from 'components/styles/colors';

export const Container = styled.div`
  flex: 1;
  max-width: 250px;
  height: 400px;
  margin: 0 1rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  border: 1px solid transparent;
  border-radius: 0.5rem;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);

  /* animation: zoomIn 1s ease-out forwards; */

  &:hover {
    animation: pulse 2s ease-in-out infinite;
    & span {
      color: ${ACCENT_COLOR};
    }
  }
  cursor: pointer;

  @media (max-width: 768px) {
    width: 90%;
    margin: 1rem 0;
    flex: unset;
  }
 
`;


export const Image = styled.div`
  flex: 5;
  width: 100%;
  background: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const Title = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0 solid lightgray;
  border-width: 1px 0 0 0;

  & > span {
    font-family: 'Mansalva', cursive;
    font-size: 2rem;
  }
`;
