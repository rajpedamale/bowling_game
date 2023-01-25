'use strict';

function bowling_game() {
  let game_score = 0;
  const rolls = [];
  let current_roll = 0;
  
  const roll = pins => {
    rolls.push(pins);
    current_roll++;
    return pins;
  };
  
  const score = () => {
    return rolls.reduce((acc, value) => acc + value, 0);
  };
  
  return {
    roll,
    score
  };
}

module.exports = bowling_game;
