import * as Pixi from 'pixi.js';
import GameObject from 'core/game-object';
import { Bodies } from 'core/physics';

export default class Crate extends GameObject {
  constructor(game) {
    const { texture } = Pixi.loader.resources.crate;
    const sprite = new Pixi.Sprite(texture);
    const rigidBody = Bodies.rectangle(50, 50, 50, 50);

    super(game, sprite, rigidBody);

    this.sprite.x = 100;
    this.sprite.y = 100;

    this.update = this.update.bind(this);
  }

  update(deltaTime) {

  }
}
