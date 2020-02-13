const stringToData = dataSheets => {
    if(typeof dataSheets !== 'string' || dataSheets === '' || dataSheets.indexOf('/') === -1 && dataSheets.indexOf('-') === -1){
        return NaN
    }
    if(dataSheets.indexOf('/')){
        const [dia, mes, ano] = dataSheets.split('/')
        const data = new Date(ano, mes - 1, dia)
        console.log(typeof dataSheets)
        return data
    }
    if(dataSheets.indexOf('-')){
        const [dia, mes, ano] = dataSheets.split('-')
        const data = new Date(ano, mes - 1, dia)
        return data
    }
    if(new Date(dataSheets)){
        return dataSheets
    }
}
  
module.exports = stringToData