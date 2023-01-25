'use strict';

const bowling_game = require('./bowling_game')();

describe('Bowling Game', () => {
  it('Should create game', () => {
    expect(bowling_game).toMatchObject({
      roll: expect.any(Function),
      score: expect.any(Function)
    });
  });
  
  it('Should be able to roll', () => {
    expect(bowling_game.roll(0)).toEqual(0);
  });
});
