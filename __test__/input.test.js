'use srict';
const minimist = require('minimist');
const Input = require('../lib/input.js');
jest.mock('minimist');
minimist.mockImplementation(() => {
  return {
    a: 'note body',
  };
});

describe('Input Module', () => {
  describe('Validation', () => {
    it('Returns true if input is valid', () => {
      const input = new Input();
      expect(input.valid('--add')).toBeTruthy();
    });
    it('Returns false if input is invalid', () => {
      const input = new Input();
      expect(input.valid('-add')).toBeFalsy();
    });
  });
});
