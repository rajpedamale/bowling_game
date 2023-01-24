'use strict';

const bowling_game = require('./bowling_game');

describe('Bowling Game', () => {
  it('Should create game', () => {
    expect(bowling_game()).toMatchObject({
      game: expect.any(Function)
    });
  });
});
