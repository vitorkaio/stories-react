// Gerencia os interval
import { produce } from 'immer';
import Interval from './interval.model'

export default function Control() {

  const intervals = []

  const startInterval = (country) => {
    const intervalId = setInterval(() => {
      console.log(country.getNameCountry())
    }, 1e3)
    const interval = Interval(country.getId(), intervalId)
    intervals.push(interval)
  }

  const stopInterval = (id) => {
    const index = intervals.findIndex(item => item.id === id)
    if (index !== -1) {
      clearInterval(intervals[index].intervalId)
      intervals.splice(index, 1)
    }
  }

  return {
    startInterval: startInterval,
    stopInterval: stopInterval
  }

}
