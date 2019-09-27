import React from 'react';
import { Container } from './ListStoriesStyle';
import Storie from 'components/storie/Storie';


export default function ListStories({ countries, selectCountry }) {

  const selectCountryHandler = (index) => {
    selectCountry(index)
  }

  const list = countries.map((country, key) => {
    const thumb = country.getListImgs()[0].urls.regular
    return <Storie key={key} index={key} name={country.getNameCountry()} url={thumb} selectCountry={selectCountryHandler}/>
  })

  return (
    <Container>
      {list}
    </Container>
  );
}


