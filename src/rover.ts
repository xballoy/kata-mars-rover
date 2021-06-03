import { Direction, EAST, NORTH, SOUTH, WEST } from "./direction";
import { BACKWARD, FORWARD, Instruction, LEFT, MoveInstruction, RIGHT, TurnInstruction } from "./instruction";
import { Coordinates } from "./coordinates";
import { Planet } from "./planet";
import { hasObstacle } from "./obstacle-detection";

type Move = `${MoveInstruction}${Direction}`;

export class Rover {
  private TURN = new Map<TurnInstruction, (d: Direction) => Direction>([
    [RIGHT, Rover.turnRight],
    [LEFT, Rover.turnLeft],
  ]);

  private MOVE = new Map<Move, (p: Planet) => (c: Coordinates) => Coordinates>([
    ["fN", Rover.moveTop],
    ["bS", Rover.moveTop],

    ["fS", Rover.moveDown],
    ["bN", Rover.moveDown],

    ["fE", Rover.moveRight],
    ["bW", Rover.moveRight],

    ["fW", Rover.moveLeft],
    ["bE", Rover.moveLeft],
  ]);

  constructor(private readonly planet: Planet, private coordinates: Coordinates, private direction: Direction) {}

  run(instructions: Instruction[]): string {
    for (const instruction of instructions) {
      if (instruction === FORWARD || instruction === BACKWARD) {
        const move = this.MOVE.get(`${instruction}${this.direction}`);
        if (!move) {
          continue;
        }

        const newCoordinates = move(this.planet)(this.coordinates);
        if (hasObstacle(this.planet.obstacles, newCoordinates)) {
          return `${Rover.getPosition(this.coordinates, this.direction)},O,${Rover.getPosition(
            newCoordinates,
            this.direction
          )}`;
        }

        this.coordinates = newCoordinates;
      } else if (instruction === RIGHT || instruction === LEFT) {
        const turn = this.TURN.get(instruction);
        if (!turn) {
          continue;
        }

        this.direction = turn(this.direction);
      }
    }

    return Rover.getPosition(this.coordinates, this.direction);
  }

  private static moveTop =
    (planet: Planet) =>
    (coordinates: Coordinates): Coordinates =>
      planet.moveTop(coordinates);

  private static moveRight =
    (planet: Planet) =>
    (coordinates: Coordinates): Coordinates =>
      planet.moveRight(coordinates);

  private static moveDown =
    (planet: Planet) =>
    (coordinates: Coordinates): Coordinates =>
      planet.moveDown(coordinates);

  private static moveLeft =
    (planet: Planet) =>
    (coordinates: Coordinates): Coordinates =>
      planet.moveLeft(coordinates);

  private static turnRight = (direction: Direction): Direction => {
    switch (direction) {
      case NORTH:
        return EAST;
      case EAST:
        return SOUTH;
      case SOUTH:
        return WEST;
      case WEST:
        return NORTH;
      default:
        return direction;
    }
  };

  private static turnLeft = (direction: Direction): Direction => {
    switch (direction) {
      case NORTH:
        return WEST;
      case WEST:
        return SOUTH;
      case SOUTH:
        return EAST;
      case EAST:
        return NORTH;
      default:
        return direction;
    }
  };

  private static getPosition = (coordinates: Coordinates, direction: Direction) =>
    `${coordinates.x},${coordinates.y},${direction}`;
}
