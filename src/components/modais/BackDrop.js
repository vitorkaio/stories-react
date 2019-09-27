import React from 'react';
import styled from 'styled-components';

const BackDropWrapper = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
	/*z-index: ${props => props.show ? 100 : -100};
	/*visibility: ${props => props.show ? "visible" : "hidden"};*/
	left: ${props => props.show ? "0" : "-1%"};
`;

const BackDrop = (props) => {
	return ( 
		<BackDropWrapper show={props.show} onClick={props.closeDrawer}/>
	);
}

export default BackDrop;