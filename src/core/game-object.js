import * as Pixi from 'pixi.js';

// Main container that houses other components.
// Inspired by Unity https://docs.unity3d.com/Manual/class-GameObject.html
export default class GameObject {
  constructor(game, sprite, rigidBody) {
    this.game = game;

    this.sprite = sprite ? sprite : null;
    this.rigidBody = rigidBody ? rigidBody : null;
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
      this.rigidBody.position.x = x
    }
  }

  set y(y) {
    if (this.sprite) {
      this.sprite.position.y = y;
    }

    if (this.rigidBody) {
      this.rigidBody.position.y = y
    }
  }
}
