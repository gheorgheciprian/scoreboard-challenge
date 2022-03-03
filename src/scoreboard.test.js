import { initialState, incrementPlayerScore, getGameScore } from "./scoreboard";
import { scores } from "./testDataOnly";

describe("initialState", () => {
  it("starts with zero points for each player", () => {
    expect(initialState).toMatchObject({
      player1: 0,
      player2: 0,
    });
  });
});

describe("incrementPlayerScore", () => {
  it("correctly adds score for players", () => {
    const player1Scored = incrementPlayerScore(1, initialState);
    expect(player1Scored).toMatchObject({
      player1: 1,
      player2: 0,
    });

    const player2Scored = incrementPlayerScore(2, player1Scored);
    expect(player2Scored).toMatchObject({
      player1: 1,
      player2: 1,
    });
  });
});

describe("getGameScore", () => {
  test.each(scores)(
    "player1: %s, player2: %s, expected score is: %s",
    (a, b, expected) => {
      const { scoreCall } = getGameScore({ player1: a, player2: b });
      expect(scoreCall).toBe(expected);
    }
  );
});
