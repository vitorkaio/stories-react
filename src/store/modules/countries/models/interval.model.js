// intervals

export default function Intervals(newId, newIntervalId) {

  let id = newId
  let intervalId = newIntervalId

  const setId = (ident) => {
    id = ident
  }

  const getId = () => id

  const setIntervalId = (intervalIdent) => {
    intervalId = intervalIdent
  }

  const getIntervalId = () => intervalId

  return {
    setId: setId,
    get: getId,
    setIntervalId: setIntervalId,
    getIntervalId: getIntervalId
  }

}
