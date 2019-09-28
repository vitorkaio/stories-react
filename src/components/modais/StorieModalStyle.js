import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 5%;
  width: 85%;
  max-width: 1024px;
  height: 85%;

  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  background-color: white;
  z-index: 99;

  animation: fadeIn 1s ease-in forwards;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    top: 20%;
    max-height: 500px;
  }
`;


export const Header = styled.div`
  flex: 1;
  border: 0 solid lightgray;
  border-bottom-width: 1px;

  display: flex;
  flex-direction: column;
`;


export const HeaderTitle = styled.div`
  flex: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;

  & span {
    font-family: 'Mansalva', cursive;
    font-size: 1.2rem;
  }
`;


export const HeaderStatus = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Status = styled.div`
  width: 100px;
  height: 5px;

  margin: 0 0.5rem;
  border: 1px solid lightgray;
  border-radius: 5px;
  overflow-x: hidden;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;


export const StatusFill = styled.div`
  background: linear-gradient(to right, cornflowerblue 50%, white 50%);
  background-size: 200% 100%;
  /* background-position: right bottom; */
  animation: all 10s linear;
  height: 100%;
  background-color: cornflowerblue;
  background-position: ${props => props.active ? 'left bottom' : 'right bottom'};
`;


export const StatusOutFill = styled.div`
  height: 100%;
`;

const fillerup = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const StatusFillUp = styled.div`
  height: 100%;
  background-color: #147fc3;
  animation: ${fillerup} 9s forwards linear;
`;



export const Content = styled.div`
  flex: 5;
  width: 100%;
  background: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
