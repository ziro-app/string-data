const stringToDate = dateString => {
    if(typeof dateString !== 'string') return false
    if(dateString.includes('/')){
        const [dia, mes, ano] = dateString.split('/')
        return new Date(ano, mes - 1, dia)
    }
    if(dateString.includes('-')){
        const [dia, mes, ano] = dateString.split('-')
        return new Date(ano, mes - 1, dia)
    }
    return false
}
  
module.exports = stringToDate