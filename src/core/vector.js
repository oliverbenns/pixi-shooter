import * as Pixi from 'pixi.js';
import { square } from 'lib/math';

export default class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  length() {
    return Math.sqrt(square(this.x) + square(this.y));
  }

  normalise() {
    const length = this.length();

    // @TODO: Return new Vector or obj literal?
    return {
      x: this.x / length,
      y: this.y / length,
    };
  }

  distanceTo(v) {
    const x = this.x - v.x;
    const y = this.y - v.y;

    return new Vector(x, y);
  }
}
