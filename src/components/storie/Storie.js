import React from 'react';
import { Container, Title, Image } from './StorieStyle';
import { translate } from 'services/translate';

export default function Storie({ name, url, index, selectCountry }) {
  return (
    <Container onClick={() => selectCountry(index)}>
      <Image url={url} />
      <Title>
        <span>{ translate(name) }</span>
      </Title>
    </Container>
  );
}
