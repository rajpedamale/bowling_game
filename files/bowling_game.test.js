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
  
  it('Should score 0 for a gutter game', () => {
    for (let i=0; i<20; i++){
      bowling_game.roll(0);
    }
    expect(bowling_game.score()).toEqual(0);
  });
  
  it('Should score 20 for all 1s', () => {
    for (let i=0; i<20; i++){
      bowling_game.roll(1);
    }
    expect(bowling_game.score()).toEqual(20);
  });
});
