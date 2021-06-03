import { Coordinates } from "./coordinates";

export abstract class Planet {
  private readonly min = new Coordinates(0, 0);

  protected constructor(private readonly max: Coordinates, public readonly obstacles: Coordinates[] = []) {}

  public moveTop(coordinates: Coordinates): Coordinates {
    if (coordinates.y === this.max.y) {
      return new Coordinates(coordinates.x, this.min.y);
    } else {
      return new Coordinates(coordinates.x, coordinates.y + 1);
    }
  }

  public moveRight(coordinates: Coordinates): Coordinates {
    if (coordinates.x === this.max.x) {
      return new Coordinates(this.min.x, coordinates.y);
    } else {
      return new Coordinates(coordinates.x + 1, coordinates.y);
    }
  }

  public moveDown(coordinates: Coordinates): Coordinates {
    if (coordinates.y === this.min.y) {
      return new Coordinates(coordinates.x, this.max.y);
    } else {
      return new Coordinates(coordinates.x, coordinates.y - 1);
    }
  }

  public moveLeft(coordinates: Coordinates): Coordinates {
    if (coordinates.x === this.min.x) {
      return new Coordinates(this.max.x, coordinates.y);
    } else {
      return new Coordinates(coordinates.x - 1, coordinates.y);
    }
  }
}
