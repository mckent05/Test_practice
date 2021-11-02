const myTest = require ('./testpractice');
const stringLength = myTest.stringLength;
const reverseString = myTest.reverseString
const Calculator = myTest.Calculator
const capitalizeString = myTest.capitalizeString

test('should return the length of the string', () => {
  function test_one() {
    stringLength('topejrfyjrdfyyjmdryfyjdfyyj')
  }

  function test_two() {
    stringLength('akinladeakinwande')
  }

  expect(test_one).toThrowError(new Error('string should not be more than 10 characters'))
  expect(test_two).toThrowError(new Error('string should not be more than 10 characters'))


});


test('should be the reversed string', () => {
  expect(reverseString('tope')).toBe('epot')
  expect(reverseString('cark')).toBe('krac')
  expect(reverseString('mountain')).toBe('niatnuom')
  expect(reverseString('camus')).toBe('sumac')
  
});

describe ('Calculator' ,() => {
  test('should do the addition', () => {
    expect( Calculator.add(2,3)).toEqual(5)
    expect( Calculator.add(2,9)).toEqual(11)
    expect( Calculator.add(6,6)).toEqual(12)
    expect( Calculator.add(10,30)).toEqual(40)

  });
  test('should do the subtraction', () => {
    expect( Calculator.substraction(10,3)).toEqual(7)
    expect( Calculator.substraction(8,3)).toEqual(5)
    expect( Calculator.substraction(12,6)).toEqual(6)
    expect( Calculator.substraction(17,13)).toEqual(4)
  });
  test('should do the multiplication', () => {
    expect( Calculator.multiply(2,3)).toEqual(6)
    expect( Calculator.multiply(3,3)).toEqual(9)
    expect( Calculator.multiply(5,3)).toEqual(15)
    expect( Calculator.multiply(10,5)).toEqual(50)
  });
  test('should do the division', () => {
    expect( Calculator.division(12,6)).toEqual(2)
    expect( Calculator.division(12,3)).toEqual(4)
    expect( Calculator.division(16,4)).toEqual(4)
    expect( Calculator.division(20,5)).toEqual(4)
  });
})

test('should capitalize the first letter of the string', () => {
  expect(capitalizeString('akinlade')).toEqual('Akinlade')
  expect(capitalizeString('microverse')).toEqual('Microverse')
  expect(capitalizeString('sample')).toEqual('Sample')
  expect(capitalizeString('biggirl')).toEqual('Biggirl')
});



