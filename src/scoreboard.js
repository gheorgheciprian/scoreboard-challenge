export const initialState = {
    player1: 0,
    player2: 0,
}

export function incrementPlayerScore(playerNumber, currentGameState) {
  const playerKey = [`player${playerNumber}`]
  return {
    ...currentGameState,
    [playerKey]: currentGameState[playerKey] + 1,
  }
}

export function getGameScore(currentGameState) {

  // use the `currentGameState` to calculate the correct `scoreCall` and
  // `winningPlayer`.

  return {
    scoreCall: null,
    winningPlayer: null,
  }
}
