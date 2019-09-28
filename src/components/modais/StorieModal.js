import React from 'react';
import { Container, Header, Content, HeaderTitle, HeaderStatus, Status, StatusFill, StatusFillUp } from './StorieModalStyle';
import { MdClose } from 'react-icons/md';
import { translate } from 'services/translate';

export default function StorieModal({ country, close }) {

  const name = country.getNameCountry()

  const status = () => {
    const lis = []
    for (let index = 0; index < country.getTotal(); index++) {
      // console.log(country.getIndexCountry())
      lis.push(
        <Status key={index}>
          { 
            country.getIndexCountry() === index
            ?
            <StatusFillUp /> 
            :
            <StatusFill active={country.getIndexCountry() > index ? true : false} />
          }
        </Status>
      )
    }
    return lis
  }
 
  return (
    <Container>
      <Header>
        <HeaderTitle>
          <p/>
          <span>{translate(name)}</span>
          <MdClose size="1.3rem" style={{cursor: 'pointer'}} onClick={close} />
        </HeaderTitle>
        <HeaderStatus>
          {status()}
        </HeaderStatus>
      </Header>
      <Content url={country.getImg() !== undefined ? country.getImg().urls.regular : null}></Content>
    </Container>
  );
}
