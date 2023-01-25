'use strict';

const bowling_game = require('./bowling_game');

let game;

const rollMany = (test_game, n, pins) => {
  for (let i=0; i<n; i++){
    test_game.roll(pins);
  }
};

const rollSpare = (test_game) => {
  test_game.roll(5);
  test_game.roll(5);
};

const rollStrike = (test_game) => {
  test_game.roll(10);
  test_game.roll(5);
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
  
  it('Should score 0 for a gutter game', () => {
    rollMany(game, 20, 0);
    expect(game.score()).toEqual(0);
  });
  
  it('Should score 20 for all ones', () => {
    rollMany(game, 20, 1);
    expect(game.score()).toEqual(20);
  });
  
  it('Should score 16 for 1 spare', () => {
    rollSpare(game);
    game.roll(3);
    rollMany(game, 17, 0);
    expect(game.score()).toEqual(16);
  });
  
  it('Should score 24 for all one strike', () => {
    rollStrike(game);
    game.roll(4);
    game.roll(3);
    rollMany(game, 16, 0);
    expect(game.score()).toEqual(24);
  });
  

});
