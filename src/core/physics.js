import { Bodies, Body, Engine, World } from 'matter-js';

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
