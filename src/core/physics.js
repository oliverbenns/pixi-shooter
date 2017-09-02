import { Bodies, Engine, World } from 'matter-js';

export default {
  Engine,
  World,
  Circle: Bodies.circle,
  Custom: Bodies.fromVertices,
  Polygon: Bodies.polygon,
  Rectangle: Bodies.rectangle,
  Trapezoid: Bodies.trapezoid,
}
