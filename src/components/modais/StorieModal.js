import React from 'react';
import { Container, Header, Content, HeaderTitle, HeaderStatus, Status, StatusFill } from './StorieModalStyle';
import { MdClose } from 'react-icons/md';
import { translate } from 'services/translate';

export default function StorieModal({ country, close }) {

  const name = country.getNameCountry()

  const status = () => {
    const lis = []
    for (let index = 0; index < country.getTotal(); index++) {
      const fill = (country.getCont() * 100) / country.getTimer()
      // const fill = ((country.getCont() * 100) / country.getTimer()) / 10
      console.log(fill)
      lis.push(
        <Status key={index}>
          { 
            index === country.getIndexCountry() 
            ?
            <StatusFill value={fill} /> 
            :
            <StatusFill value={country.getIndexCountry() > index ? 100 : 0} /> 
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
      <Content>Content</Content>
    </Container>
  );
}
