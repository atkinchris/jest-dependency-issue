debugger;
jest.enableAutomock();
jest.unmock('hello');
const hello = require('hello');

it('should return Hello', () => {
  expect(hello()).toEqual('Hello');
});
