export const initialState = {
  player1: 0,
  player2: 0,
};

export function getGameScoreUtils(score) {
  switch (score) {
    case 0:
      return "Love";
    case 1:
      return "15";
    case 2:
      return "30";
    case 3:
      return "40";
    default:
      break;
  }
}

export function incrementPlayerScore(playerNumber, currentGameState) {
  const playerKey = [`player${playerNumber}`];
  return {
    ...currentGameState,
    [playerKey]: currentGameState[playerKey] + 1,
  };
}

export function getGameScore(currentGameState) {
  // use the `currentGameState` to calculate the correct `scoreCall` and
  // `winningPlayer`.

  const { player1, player2 } = currentGameState;
  const winningPlayer = player1 > player2 ? player1 : player2;
  const winningPlayerName = player1 > player2 ? "player1" : "player2";
  let scoreCall = null;

  if (Math.abs(player1 - player2) >= 2 && (player1 >= 4 || player2 >= 4)) {
    //winner
    scoreCall = `Game, ${winningPlayerName}`;
  } else {
    if (player1 - player2 === 0) {
      //Deuce
      const score = `${getGameScoreUtils(player1)}`;
      scoreCall = player1 && player2 >= 3 ? "Deuce" : `${score}-All`;
    } else if (winningPlayer >= 4) {
      //Advantage
      scoreCall = `Advantage, ${winningPlayerName}`;
    } else {
      scoreCall = `${getGameScoreUtils(player1)}-${getGameScoreUtils(player2)}`;
    }
  }

  return {
    scoreCall: scoreCall,
    winningPlayer: winningPlayer,
  };
}
