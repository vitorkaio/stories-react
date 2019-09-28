// Gerencia os interval
import stores from 'store/store';
import * as countriesActions from 'store/modules/countries/actions'


const Control = () => {

  let interval = null

  const finishInterval = () => {
    const index = stores.getState().countriesReducer.selectedCountry
    if (index === null) {
      stopInterval()
      return true
    }
    return false
  }

  const startInterval = async () => {
    const intervalId = setInterval(() => {

      // Verifica se fechou
      if(!finishInterval()) {
        const index = stores.getState().countriesReducer.selectedCountry
        /* const country = stores.getState().countriesReducer.countries[index]
        console.log(`cont: ${country.getCont()}\nindex: ${country.getIndexCountry()}\ntimer: ${country.getTimer()}
        \ntotal: ${country.getTotal()}`) */
        stores.dispatch(countriesActions.updateContCountry(index));
      }
      

    }, 1e3)
    interval = intervalId
  }

  const stopInterval = async () => {
    clearInterval(interval)
  }

  return {
    startInterval: startInterval,
    stopInterval: stopInterval
  }

}

export default Control()
