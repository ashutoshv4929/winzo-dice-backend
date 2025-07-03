import { Schema, type, MapSchema } from "@colyseus/schema";

export class Player extends Schema {
  @type("number") score = 0;
  @type("number") totalRolls = 0;
  @type("string") sessionId = "";
  @type("number") playerNumber = 0;
  @type(["number"]) history = new Array<number>();
}

export class MyRoomState extends Schema {
  @type({ map: Player }) players = new MapSchema<Player>();
  @type("boolean") gameOver = false;
  @type("number") currentRound = 1;
  @type("string") currentPlayerId = "";
  @type({ map: "number" }) finalScores = new MapSchema<number>();
  @type("string") winnerSessionId = "";
}
