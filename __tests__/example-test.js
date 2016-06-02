jest.unmock('../echo');
const echo = require('../echo');

it('should be defined', () => {
  const result = echo();
  console.log(result)
  expect(result).toBeDefined();
});
