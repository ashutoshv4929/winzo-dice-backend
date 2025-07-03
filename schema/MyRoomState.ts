import { Schema, type, MapSchema } from "@colyseus/schema";

export class Player extends Schema {
  @type("number") score = 0;
  @type("number") totalRolls = 0;
}

export class MyRoomState extends Schema {
  @type({ map: Player }) players = new MapSchema<Player>();
}
