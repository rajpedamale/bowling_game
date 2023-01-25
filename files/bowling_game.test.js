'use strict';

const bowling_game = require('./bowling_game');

let game;

const rollMany = (test_game, n, pins) => {
  for (let i=0; i<n; i++){
    test_game.roll(pins);
  }
};

describe('Bowling Game', () => {
  beforeEach(() => {
    game = bowling_game();
  });
  
  it('Should create game', () => {
    expect(game).toMatchObject({
      roll: expect.any(Function),
      score: expect.any(Function)
    });
  });
  
  it('Should be able to roll', () => {
    expect(game.roll(0)).toEqual(0);
  });
  
  it('Should score 0 for a gutter game', () => {
    const n = 20;
    const pins = 0;
    rollMany(game, n, pins);
    expect(game.score()).toEqual(0);
  });
  
  it('Should score 20 for all 1s', () => {
    const n = 20;
    const pins = 1;
    rollMany(game, n, pins);
    expect(game.score()).toEqual(20);
  });
});
