import * as Pixi from 'pixi.js';
import GameObject from 'core/game-object';
import Graphics from 'core/graphics';
import Physics from 'core/physics';

export default class Crate extends GameObject {
  constructor(game, x, y) {
    const { texture } = Pixi.loader.resources.crate;
    const sprite = new Graphics.Sprite(texture);
    const rigidBody = new Physics.Rectangle(x, y, 50, 50);

    super(game, sprite, rigidBody);

    // @TODO: This is not right.
    this.sprite.x = x;
    this.sprite.y = y;

    this.update = this.update.bind(this);
  }

  update(deltaTime) {

  }
}
