import { hasObstacle } from "./obstacle-detection";
import { Coordinates } from "./coordinates";

describe("Obstacle Detection", () => {
  describe("hasObstacle", () => {
    it("should return true when obstacle at position", () => {
      // Arrange
      const obstacles = [new Coordinates(0, 0), new Coordinates(1, 1)];
      const position = new Coordinates(1, 1);

      // Act
      const result = hasObstacle(obstacles, position);

      // Assert
      expect(result).toEqual(true);
    });

    it("should return false when no obstacle at position", () => {
      // Arrange
      const obstacles = [new Coordinates(0, 0), new Coordinates(1, 1)];
      const position = new Coordinates(2, 2);

      // Act
      const result = hasObstacle(obstacles, position);

      // Assert
      expect(result).toEqual(false);
    });

    it.each([
      ["empty", []],
      ["null", null as unknown as Coordinates[]],
      ["undefined", undefined as unknown as Coordinates[]],
    ])("should return false when obstacle %s", (_: string, obstacles: Coordinates[]) => {
      // Arrange
      const position = new Coordinates(2, 2);

      // Act
      const result = hasObstacle(obstacles, position);

      // Assert
      expect(result).toEqual(false);
    });
  });
});
