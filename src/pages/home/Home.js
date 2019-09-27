import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countriesActions from 'store/modules/countries/actions';

import { Container } from './HomeStyled';
import ListStories from 'components/listStories/ListStories';
import StorieModal from 'components/modais/StorieModal'
import BackDrop from 'components/modais/BackDrop'

const Home = ({ countriesReducer, countriesRequest, selectCountry, resetCountry }) => {

  useEffect(() => {
    countriesRequest()
  }, [countriesRequest])

  const { load, fail, countries, selectedCountry } = countriesReducer

  // console.log(test)

  const selectCountryHandler = (index) => {
    selectCountry(index)
  }

  const resetSelectCountryHandler = () => {
    resetCountry()
  }

  /* if (selectedCountry) {
    const country = countries[selectedCountry]
    console.log(`cont: ${country.getCont()}\nindex: ${country.getIndexCountry()}\ntimer: ${country.getTimer()}
    \ntotal: ${country.getTotal()}`) 
  } */

  return (
    <Container>
      {
        load
        ?
        <h3>Carregando...</h3>
        :
        <ListStories countries={countries} selectCountry={selectCountryHandler} />
      }
      <span>{fail ? 'Error' : null}</span>
      {
        selectedCountry === null 
        ? 
        null 
        : 
        <>
          <StorieModal country={countries[selectedCountry]} close={resetSelectCountryHandler} />
          <BackDrop show={true} closeDrawer={resetSelectCountryHandler} />
        </>
      }
    </Container>
  );
}


const mapStateToProps = state => ({
  countriesReducer: state.countriesReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(countriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
