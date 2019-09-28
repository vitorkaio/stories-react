const countries = [
  'brazil', 
  'costa rica', 
  'japan', 
  'canada',
  'united states',
  'austria',
  'ireland',
  'switzerland',
  'germany',
  'mexico',
  'sweden',
  'south korea',
  'argentina',
  'egypt',
  'russia',
  'turkey',
  'indonesia',
  'england',
  'chile',
]

// random sort function
const shuffle = (a, b) => {
   return Math.random() > 0.5 ? -1 : 1;
}

export const listCountries = (qtd) => {
  const randomCountries = countries.sort(shuffle)
  const newCountries = randomCountries.splice(0, qtd)
  return [...newCountries]
}


// Pega valores random do array
export const randomImages = (list) => {
  const subrt = Math.floor(Math.random() * 4) + 2 
  const random = list.sort(shuffle)
  const newImages = random.splice(0, subrt)
  return [...newImages]
}
