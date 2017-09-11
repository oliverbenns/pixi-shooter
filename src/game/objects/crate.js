import * as Pixi from 'pixi.js';
import GameObject from 'core/game-object';
import Graphics from 'core/graphics';
import Physics from 'core/physics';

export default class Crate extends GameObject {
  constructor(game, x, y) {
    const { texture } = Pixi.loader.resources.crate;
    const body = new Physics.Rectangle(null, null, texture.orig.width, texture.orig.height, { debug: true });

    super(game, texture, { body, x, y });
  }

  update(deltaTime) {}
}


