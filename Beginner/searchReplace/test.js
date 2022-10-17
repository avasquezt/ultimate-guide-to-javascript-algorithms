const searchReplace = require('./index-START')

test('reverseString is a function', () => {
  expect(typeof searchReplace).toEqual('function');
});

test('reverses a string of text', () => {
  expect(searchReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')).toEqual('He is Sitting on the couch');
});

test('reverses a string containing numbers', () => {
  expect(searchReplace('He is Sleeping on the couch', 'He', 'she')).toEqual('She is Sleeping on the couch');
});

test('reverses a string containing mixed case characters', () => {
  expect(searchReplace('He is sleeping and Sleeping on the couch', 'Sleeping', 'sitting')).toEqual('He is sleeping and Sitting on the couch');
});