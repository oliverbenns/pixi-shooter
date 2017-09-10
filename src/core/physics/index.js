import { Bodies, Engine, World } from 'matter-js';
import Debugger from './debugger';

// @TODO: Compose this better. Don't reference with body.matter.bleh
// Temp job until https://github.com/liabru/matter-js/issues/486
class Rectangle {
  constructor(x, y, width, height, config = {}) {
    this.matter = Bodies.rectangle(x, y, width, height);

    if (config.debug) {
      this.debugger = new Debugger();
    }

    // const matterBody = Bodies.rectangle(...arguments);
    // Object.assign(this, matterBody);
  }

  // Not ideal.
  update() {
    if (this.debugger) {
      this.debugger.update(this.matter.vertices);
    }
  }

  // Temp
  get position() {
    return this.matter.position;
  }

  get velocity() {
    return this.matter.position;
  }
}

export default {
  Engine,
  World,
  Circle: Bodies.circle,
  Custom: Bodies.fromVertices,
  Polygon: Bodies.polygon,
  Rectangle,
  Trapezoid: Bodies.trapezoid,
}
