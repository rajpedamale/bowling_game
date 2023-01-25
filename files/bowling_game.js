'use strict';

function bowling_game() {
  let game_score = 0;
  
  const roll = pins => {
    game_score += pins;
    return pins;
  };
  
  const score = () => {
    return game_score;
  };
  
  return {
    roll,
    score
  };
}

module.exports = bowling_game;
