jest.unmock('echo');
const echo = require('echo');

it('should be defined', () => {
  expect(echo.say('Hello')).toEqual('Hello');
});
