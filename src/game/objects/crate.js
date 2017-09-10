import * as Pixi from 'pixi.js';
import GameObject from 'core/game-object';
import Graphics from 'core/graphics';
import Physics from 'core/physics';

export default class Crate extends GameObject {
  constructor(game, x, y) {
    const { texture } = Pixi.loader.resources.crate;
    const sprite = new Graphics.Sprite(texture);
    sprite.x = x;
    sprite.y = y;
    const rigidBody = new Physics.Rectangle(sprite.x, sprite.y, texture.orig.width, texture.orig.height, { debug: true });

    super(game, sprite, rigidBody);
  }

  update(deltaTime) {}
}


