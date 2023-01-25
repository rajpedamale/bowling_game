'use strict';

function bowling_game() {
  const rolls = [];
  let current_roll = 0;
  
  const roll = pins => {
    rolls.push(pins);
    current_roll++;
    return pins;
  };
  
  const score = () => {
    let game_score = 0;
    let i = 0;
    for (let frame=0; frame<10; frame++) {
      games_score += rolls[i++] + rolls[i++];
    }
    return game_score;
  };
  
  return {
    roll,
    score
  };
}

module.exports = bowling_game;
