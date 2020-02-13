const test = require('ava')
const stringToData = require('./index')

test('Receive an string with /', t => {
    const result = typeof stringToData('10/02/2020')
    const expected = typeof new Date(2020,2,10)
    console.log('Receive an string with /')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive an string with -', t => {
    const result = typeof stringToData('10/02/2020')
    const expected = typeof new Date(2020,2,10)
    console.log('Receive an string with -')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive an number', t => {
    const result = stringToData(100)
    const expected = NaN
    console.log('Receive an numbe')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive falsy 1', t => {
    const result = stringToData(NaN)
    const expected = NaN
    console.log('Receive falsy 1')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive falsy 2', t => {
    const result = stringToData(undefined)
    const expected = NaN
    console.log('Receive falsy 2')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive falsy 3', t => {
    const result = stringToData(null)
    const expected = NaN
    console.log('Receive falsy 3')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive falsy 4', t => {
    const result = stringToData()
    const expected = NaN
    console.log('Receive falsy 4')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive falsy 5', t => {
    const result = stringToData('')
    const expected = NaN
    console.log('Receive falsy 5')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive falsy 6', t => {
    const result = stringToData(false)
    const expected = NaN
    console.log('Receive falsy 6')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive 0', t => {
    const result = stringToData(0)
    const expected = NaN
    console.log('Receive 0')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive string brazilian', t => {
    const result = stringToData('1,12')
    const expected = NaN
    console.log('Receive string brazilian')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive string usa', t => {
    const result = stringToData('1.1')
    const expected = NaN
    console.log('Receive string usa')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive string other 1', t => {
    const result = stringToData('string')
    const expected = NaN
    console.log('Receive string other')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive string other 2', t => {
    const result = stringToData('string,1,1')
    const expected = NaN
    console.log('Receive string other 2')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive string other 3', t => {
    const result = stringToData('1,1,1')
    const expected = NaN
    console.log('Receive string other 3')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive array', t => {
    const result = stringToData([])
    const expected = NaN
    console.log('Receive array')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive object', t => {
    const result = stringToData({})
    const expected = NaN
    console.log('Receive object')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})
test('Receive no argument', t => {
    const result = stringToData()
    const expected = NaN
    console.log('Receive object')
    console.log(result)
    console.log(expected)
    t.is(result, expected)
})