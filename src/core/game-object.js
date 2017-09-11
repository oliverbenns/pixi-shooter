import * as Pixi from 'pixi.js';
import Graphics from 'core/graphics';
import Physics from 'core/physics';

// Main container that houses other components.
// Inspired by Unity https://docs.unity3d.com/Manual/class-GameObject.html
export default class GameObject extends Graphics.Sprite {
  constructor(game, texture, config = { body: null, x: 0, y: 0 }) {
    super(texture);
    this.game = game;
    this.x = config.x;
    this.y = config.y;

    if (config.body) {
      this._addBody(config.body);
    }
  }

  _addBody(body) {
    this.body = body;
    Physics.Body.setPosition(this.body.matter, { x: this.x, y: this.y });
    Physics.World.add(this.game.engine.world, this.body.matter);
  }

  // @TODO Seperate this into a seperate body class.
  // preUpdatePhysics() {
  //   this.
  // }

  // postUpdatePhysics() {

  // }

  // Need a pre and post here.
  postUpdatePhysics() {
    if (!this.body) {
      return;
    }

    this.rotation = this.body.matter.angle;
    this.x += this.body.matter.velocity.x;
    this.y += this.body.matter.velocity.y;
  }
}
