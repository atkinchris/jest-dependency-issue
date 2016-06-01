import example from '../example';
import randomstring from 'randomstring';

jest.unmock('randomstring');
jest.unmock('../example');

console.log('***randomstring***', randomstring);

describe('Example test', () => {
  it('should pass this test', () => {
    expect(example()).toEqual('Yarp.');
  });
});
