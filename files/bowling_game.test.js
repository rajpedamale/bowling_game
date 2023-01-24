'use strict';

const game = require('./bowling_game');

describe('Test setup', () => {
  it('Should confirm running env', () => {
    expect(game()).toEqual(42);
  });
});
