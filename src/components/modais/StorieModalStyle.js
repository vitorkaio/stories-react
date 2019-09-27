import styled from 'styled-components';

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
  background-color: cornsilk;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;


export const Status = styled.div`
  width: 100px;
  height: 10px;

  border: 1px solid black;
`;


export const StatusFill = styled.div`
  width: ${props => props.value}%;
  height: 100%;
  background-color: coral;
`;


export const Content = styled.div`
  flex: 5;
`;
