
export const translate = (country) => {
  switch (country) {
    case 'brazil':
      return 'Brasil'
    case 'costa rica':
      return 'Costa Rica'
    case 'japan':
      return 'Japão'
    case 'canada':
      return 'Canadá'
    default:
      return ''
  }
}
