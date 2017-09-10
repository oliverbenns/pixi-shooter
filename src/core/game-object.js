import * as Pixi from 'pixi.js';
import Physics from 'core/physics';

// Main container that houses other components.
// Inspired by Unity https://docs.unity3d.com/Manual/class-GameObject.html
export default class GameObject {
  constructor(game, sprite, rigidBody) {
    this.game = game;

    this.sprite = sprite ? sprite : null;

    // @TODO: What if they add a body later?
    // Maybe it always requires it on obj creation and we specify a disabled flag.
    // @TODO: Put this on a body class instead.
    if (rigidBody) {
      this.rigidBody = rigidBody;

      Physics.World.add(this.game.engine.world, this.rigidBody.matter);
    }
  }

  get x() {
    const { rigidBody, sprite } = this;
    return sprite ? sprite.position.x : rigidBody.matter.position.x;
  }

  get y() {
    const { rigidBody, sprite } = this;
    return sprite ? sprite.position.y : rigidBody.matter.position.y;
  }

  set x(x) {
    console.log('SETING X', x);
    if (this.sprite) {
      this.sprite.position.x = x;
    }

    if (this.rigidBody) {
      this.rigidBody.matter.position.x = x;
    }
  }

  set y(y) {
    if (this.sprite) {
      this.sprite.position.y = y;
    }

    if (this.rigidBody) {
      this.rigidBody.matter.position.y = y;
    }
  }

  // @TODO Seperate this into a seperate body class.
  // preUpdatePhysics() {
  //   this.
  // }

  // postUpdatePhysics() {

  // }

  // Need a pre and post here.
  updatePhysics() {
    if (!this.rigidBody || !this.sprite) {
      return;
    }

    // this.sprite.rotation += this.rigidBody.angularVelocity;

    // @TODO: Update this so that the sprite movement actually does something. Velocity?
    this.sprite.position.x += this.rigidBody.matter.velocity.x;
    this.sprite.position.y += this.rigidBody.matter.velocity.y;
  }
}
