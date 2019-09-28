import React, { useState, useEffect } from 'react';
import { Container, Header, Content, HeaderTitle, HeaderStatus, Status, StatusFill } from './StorieModalStyle';
import { MdClose } from 'react-icons/md';
import { translate } from 'services/translate';
import { interval } from 'rxjs';

let fills = 0;
let numbers = interval(1);
let subs = null

export default function StorieModal({ country, close }) {

  const name = country.getNameCountry()

  const [per, setPer] = useState(fills)

  useEffect(() => {
    subs = numbers.subscribe(_ => {
      setPer(fills++)
      if (country.getCont() === country.getTimer()-1) {
        fills = 0
        setPer(fills)
      }
    });
    return () => {console.log('sair'); fills = 0; subs.unsubscribe()}
  }, [country])


  const status = () => {
    const lis = []
    for (let index = 0; index < country.getTotal(); index++) {
      // const fill = Math.round((country.getCont() * 100) / 1000)
      // const fill = (country.getCont() * 100) / country.getTimer()
      // const fill = country.getCont()
      // console.log(country.getCont(), Math.round(per / 21))
      // console.log(index, country.getIndexCountry())
      lis.push(
        <Status key={index}>
          { 
            index === country.getIndexCountry() 
            ?
            <StatusFill value={Math.round(per / 21)} /> 
            :
            <StatusFill value={country.getIndexCountry() >= index ? 100 : 0} /> 
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
      <Content url={country.getImg().urls.regular}></Content>
    </Container>
  );
}
