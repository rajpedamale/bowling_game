'use strict';

function bowling_game() {
  const rolls = Array.from(Array(21), () => 0);
  let current_roll = 0;
  
  const roll = pins => {
    rolls[current_roll++] = pins;
    return pins;
  };
  
  const score = () => {
    let game_score = 0;
    let i = 0;
    for (let frame=0; frame<10; frame++) {
      if (rolls[i] + rolls[i+1] === 10) {
        game_score += 10 + rolls[i+2];
      } else {
        game_score += rolls[i++] + rolls[i++];
      }
    }
    return game_score;
  };
  
  return {
    roll,
    score
  };
}

module.exports = bowling_game;
