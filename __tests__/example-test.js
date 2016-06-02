import randomstring from 'randomstring';

jest.unmock('randomstring');

it('should generate a string', () => {
  expect(randomstring.generate()).toEqual('Not random.');
});
