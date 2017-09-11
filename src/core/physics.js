import { Bodies, Body, Engine, World } from 'matter-js';

World.createWalls = (world, width, height) => {
  const thickness = 10;
  const walls = [
    // x, y, width, height
    [ width / 2, 0, width, thickness ], // top
    [ width / 2, height, width, thickness ], // bottom
    [ width, height / 2, thickness, height ], // right
    [ 0, height / 2, thickness, height ], // left
  ].map(w => Bodies.rectangle(...w, { isStatic: true }));

  World.add(world, walls);
}

export default {
  Body,
  Engine,
  World,
  Circle: Bodies.circle,
  Custom: Bodies.fromVertices,
  Polygon: Bodies.polygon,
  Rectangle: Bodies.rectangle,
  Trapezoid: Bodies.trapezoid,
}
