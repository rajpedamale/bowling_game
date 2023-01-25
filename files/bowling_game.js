'use strict';

function bowling_game() {
  const rolls = Array.from(Array(21), () => 0);
  let current_roll = 0;
  
  const roll = pins => {
    rolls[current_roll++] = pins;
    return pins;
  };
  
  const isStrike = (first_in_frame) => {
    return rolls[first_in_frame] === 10;
  }
  
  const isSpare = (first_in_frame) => {
    return rolls[first_in_frame] + rolls[first_in_frame+1] === 10;
  };
  
  const score = () => {
    let game_score = 0;
    let first_in_frame = 0;
    for (let frame=0; frame<10; frame++) {
      if (isStrike(first_in_frame)) {
        game_score += 10 + rolls[first_in_frame + 1] + rolls[first_in_frame + 2];
        first_in_frame++;
      } else if (isSpare(first_in_frame)) {
        game_score += 10 + rolls[first_in_frame+2];
        first_in_frame += 2;
      } else {
        game_score += rolls[first_in_frame] + rolls[first_in_frame + 1];
        first_in_frame += 2;
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
