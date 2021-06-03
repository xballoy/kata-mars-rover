import { Coordinates } from "./coordinates";

export const hasObstacle = (obstacles: Coordinates[], position: Coordinates): boolean => {
  if (!obstacles) {
    return false;
  }

  return !!obstacles.find((obstacle) => obstacle.x === position.x && obstacle.y === position.y);
};
