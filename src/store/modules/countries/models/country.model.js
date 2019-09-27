// Closure para gerenciar os dados do stories

export default function Country() {

  let id = Date.now() + Math.random() + "stories";
  let nameCountry = '' // nome do país
  let listImgs = [] // lista de imagens do país
  let timer = 15 // tempo max do timer
  let cont = 0 // quando for igual ao timer muda de imagem
  let indexCountry = 0 // indica qual imagem do array será mostrada
  let total = 0 // total de imagens


  const getId = () => id

  // Insere uma nova lista de imagens do país
  const setListImgs = (countries) => {
    listImgs = [...countries]
  }

  // Retorna todas as imagens do país
  const getListImgs = () => [...listImgs]

  // Retorna uma imagem do array de imgs
  const getImg = () => {
    return listImgs[indexCountry]
  }
  
  const setNameCountry = (name) => {
    nameCountry = name
  }

  const getNameCountry = () => nameCountry

  const setTimer = (newTimer) => {
    timer = newTimer
  }

  const getTimer = () => timer

  const setCont = (newCont) => {
    cont = newCont
  }

  const getCont = () => cont

  const setIndexCountry = (newIndexCountry) => {
    indexCountry = newIndexCountry
  }

  const getIndexCountry = () => indexCountry

  const setTotal = (newTotal) => {
    total = newTotal
  }

  const getTotal = () => total

  // Verifica se já passou por todas as imagens
  const isCheckAllImgs = () => indexCountry === total

  return {
    getId: getId,
    setListImgs: setListImgs,
    getListImgs: getListImgs,
    setNameCountry: setNameCountry,
    getNameCountry: getNameCountry,
    setTimer: setTimer,
    getTimer: getTimer,
    setCont: setCont,
    getCont: getCont,
    setIndexCountry: setIndexCountry,
    getIndexCountry: getIndexCountry,
    setTotal: setTotal,
    getTotal: getTotal,
    getImg: getImg,
    isCheckAllImgs: isCheckAllImgs
  }

}// Fim do closure
