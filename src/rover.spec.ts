import { Rover } from "./rover";
import { EAST, NORTH, SOUTH, WEST } from "./direction";
import { BACKWARD, FORWARD, LEFT, RIGHT } from "./instruction";
import { Coordinates } from "./coordinates";
import { Planet } from "./planet";

describe("Rover", () => {
  class TestPlanet extends Planet {
    constructor(max: Coordinates, obstacles: Coordinates[]) {
      super(max, obstacles);
    }
  }

  const getPlanet = (max: Coordinates, obstacles: Coordinates[] = []) => new TestPlanet(max, obstacles);

  describe("Run", () => {
    it("should return current position when no instructions", () => {
      // Arrange
      const planet = getPlanet(new Coordinates(4, 4));
      const rover = new Rover(planet, new Coordinates(0, 0), NORTH);

      // Act
      const position = rover.run([]);

      // Assert
      expect(position).toEqual("0,0,N");
    });

    describe("Forward", () => {
      it("should increment y when when moving forward and facing north", () => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4));
        const rover = new Rover(planet, new Coordinates(0, 0), NORTH);

        // Act
        const position = rover.run([FORWARD]);

        // Assert
        expect(position).toEqual("0,1,N");
      });

      it("should return to its initial position when moving 5 times forward and facing north", () => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4));
        const rover = new Rover(planet, new Coordinates(0, 0), NORTH);

        // Act
        const position = rover.run([FORWARD, FORWARD, FORWARD, FORWARD, FORWARD]);

        // Assert
        expect(position).toEqual("0,0,N");
      });

      it("should decrement y when when moving forward and facing south", () => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4));
        const rover = new Rover(planet, new Coordinates(0, 4), SOUTH);

        // Act
        const position = rover.run([FORWARD]);

        // Assert
        expect(position).toEqual("0,3,S");
      });

      it("should return to its initial position when moving 5 times forward and facing south", () => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4));
        const rover = new Rover(planet, new Coordinates(0, 4), SOUTH);

        // Act
        const position = rover.run([FORWARD, FORWARD, FORWARD, FORWARD, FORWARD]);

        // Assert
        expect(position).toEqual("0,4,S");
      });

      it("should increment x when when moving forward and facing east", () => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4));
        const rover = new Rover(planet, new Coordinates(0, 0), EAST);

        // Act
        const position = rover.run([FORWARD]);

        // Assert
        expect(position).toEqual("1,0,E");
      });

      it("should return to its initial position when moving 5 times forward and facing east", () => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4));
        const rover = new Rover(planet, new Coordinates(0, 0), EAST);

        // Act
        const position = rover.run([FORWARD, FORWARD, FORWARD, FORWARD, FORWARD]);

        // Assert
        expect(position).toEqual("0,0,E");
      });

      it("should decrement x when when moving forward and facing west", () => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4));
        const rover = new Rover(planet, new Coordinates(4, 0), WEST);

        // Act
        const position = rover.run([FORWARD]);

        // Assert
        expect(position).toEqual("3,0,W");
      });

      it("should return to its initial position when moving 5 times forward and facing west", () => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4));
        const rover = new Rover(planet, new Coordinates(4, 0), WEST);

        // Act
        const position = rover.run([FORWARD, FORWARD, FORWARD, FORWARD, FORWARD]);

        // Assert
        expect(position).toEqual("4,0,W");
      });
    });

    describe("Backward", () => {
      it("should decrement y when when moving forward and facing north", () => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4));
        const rover = new Rover(planet, new Coordinates(0, 4), NORTH);

        // Act
        const position = rover.run([BACKWARD]);

        // Assert
        expect(position).toEqual("0,3,N");
      });

      it("should return to its initial position when moving 5 times decrement and facing north", () => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4));
        const rover = new Rover(planet, new Coordinates(0, 0), NORTH);

        // Act
        const position = rover.run([BACKWARD, BACKWARD, BACKWARD, BACKWARD, BACKWARD]);

        // Assert
        expect(position).toEqual("0,0,N");
      });

      it("should increment y when when moving backward and facing south", () => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4));
        const rover = new Rover(planet, new Coordinates(0, 0), SOUTH);

        // Act
        const position = rover.run([BACKWARD]);

        // Assert
        expect(position).toEqual("0,1,S");
      });

      it("should return to its initial position when moving 5 times backward and facing south", () => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4));
        const rover = new Rover(planet, new Coordinates(0, 0), SOUTH);

        // Act
        const position = rover.run([BACKWARD, BACKWARD, BACKWARD, BACKWARD, BACKWARD]);

        // Assert
        expect(position).toEqual("0,0,S");
      });

      it("should decrement x when when moving forward and facing east", () => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4));
        const rover = new Rover(planet, new Coordinates(4, 0), EAST);

        // Act
        const position = rover.run([BACKWARD]);

        // Assert
        expect(position).toEqual("3,0,E");
      });

      it("should return to its initial position when moving 5 times decrement and facing east", () => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4));
        const rover = new Rover(planet, new Coordinates(0, 0), EAST);

        // Act
        const position = rover.run([BACKWARD, BACKWARD, BACKWARD, BACKWARD, BACKWARD]);

        // Assert
        expect(position).toEqual("0,0,E");
      });

      it("should increment x when when moving backward and facing west", () => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4));
        const rover = new Rover(planet, new Coordinates(0, 0), WEST);

        // Act
        const position = rover.run([BACKWARD]);

        // Assert
        expect(position).toEqual("1,0,W");
      });

      it("should return to its initial position when moving 5 times backward and facing west", () => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4));
        const rover = new Rover(planet, new Coordinates(0, 0), WEST);

        // Act
        const position = rover.run([BACKWARD, BACKWARD, BACKWARD, BACKWARD, BACKWARD]);

        // Assert
        expect(position).toEqual("0,0,W");
      });
    });

    describe("Right", () => {
      it.each([
        [NORTH, EAST],
        [EAST, SOUTH],
        [SOUTH, WEST],
        [WEST, NORTH],
      ])("should change direction when moving right and facing %s", (initialDirection, newDirection) => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4));
        const rover = new Rover(planet, new Coordinates(0, 0), initialDirection);

        // Act
        const position = rover.run([RIGHT]);

        // Assert
        expect(position).toEqual(`0,0,${newDirection}`);
      });

      it("should face initial direction when turning right 4 times", () => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4));
        const rover = new Rover(planet, new Coordinates(0, 0), NORTH);

        // Act
        const position = rover.run([RIGHT, RIGHT, RIGHT, RIGHT]);

        // Assert
        expect(position).toEqual(`0,0,N`);
      });
    });

    describe("Left", () => {
      it.each([
        [NORTH, WEST],
        [WEST, SOUTH],
        [SOUTH, EAST],
        [EAST, NORTH],
      ])("should change direction when moving left and facing %s", (initialDirection, newDirection) => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4));
        const rover = new Rover(planet, new Coordinates(0, 0), initialDirection);

        // Act
        const position = rover.run([LEFT]);

        // Assert
        expect(position).toEqual(`0,0,${newDirection}`);
      });

      it("should face initial direction when turning left 4 times", () => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4));
        const rover = new Rover(planet, new Coordinates(0, 0), NORTH);

        // Act
        const position = rover.run([LEFT, LEFT, LEFT, LEFT]);

        // Assert
        expect(position).toEqual(`0,0,N`);
      });
    });

    describe("Complex path", () => {
      it("should move along a complex path", () => {
        // Arrange
        const planet = getPlanet(new Coordinates(10, 10));
        const rover = new Rover(planet, new Coordinates(5, 5), NORTH);

        // Act
        const position = rover.run([
          FORWARD,
          FORWARD,
          RIGHT,
          FORWARD,
          LEFT,
          FORWARD,
          LEFT,
          BACKWARD,
          BACKWARD,
          BACKWARD,
          BACKWARD,
          BACKWARD,
        ]);

        // Assert
        expect(position).toEqual("0,8,W");
      });
    });

    describe("Obstacle detection", () => {
      it.each([
        [NORTH, "2,3,N"],
        [EAST, "3,2,E"],
        [SOUTH, "2,1,S"],
        [WEST, "1,2,W"],
      ])(
        "should stop when facing %s, going forward and when encountering an obstacle",
        (direction, obstaclePosition) => {
          // Arrange
          const planet = getPlanet(new Coordinates(4, 4), [
            new Coordinates(1, 2),
            new Coordinates(2, 1),
            new Coordinates(2, 3),
            new Coordinates(3, 2),
          ]);
          const rover = new Rover(planet, new Coordinates(2, 2), direction);

          // Act
          const position = rover.run([FORWARD]);

          // Assert
          expect(position).toEqual(`2,2,${direction},O,${obstaclePosition}`);
        }
      );

      it("should not continue executing instructions when encountering an obstacle", () => {
        // Arrange
        const planet = getPlanet(new Coordinates(4, 4), [new Coordinates(2, 3)]);
        const rover = new Rover(planet, new Coordinates(2, 2), NORTH);

        // Act
        const position = rover.run([FORWARD, RIGHT, FORWARD]);

        // Assert
        expect(position).toEqual(`2,2,N,O,2,3,N`);
      });
    });
  });
});
