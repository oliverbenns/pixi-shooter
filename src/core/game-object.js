import * as Pixi from 'pixi.js';
import { World } from 'core/physics';

// Main container that houses other components.
// Inspired by Unity https://docs.unity3d.com/Manual/class-GameObject.html
export default class GameObject {
  constructor(game, sprite, rigidBody) {
    this.game = game;

    this.sprite = sprite ? sprite : null;

    if (rigidBody) {
      this.rigidBody = rigidBody;
      World.add(this.game.engine.world, this.rigidBody);
    }
  }

  get x() {
    const { rigidBody, sprite } = this;
    return sprite ? sprite.position.x : rigidBody.position.x;
  }

  get y() {
    const { rigidBody, sprite } = this;
    return sprite ? sprite.position.y : rigidBody.position.y;
  }

  set x(x) {
    if (this.sprite) {
      this.sprite.position.x = x;
    }

    if (this.rigidBody) {
      this.rigidBody.position.x = x;
    }
  }

  set y(y) {
    if (this.sprite) {
      this.sprite.position.y = y;
    }

    if (this.rigidBody) {
      this.rigidBody.position.y = y;
    }
  }

  update() {
    // if (this.sprite && this.sprite.update) {

    // }

    // if (this.body) {

    // }
  }
}
