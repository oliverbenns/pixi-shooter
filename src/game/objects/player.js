import Vector from 'core/vector';
import { toDegree } from 'lib/math';
import * as Pixi from 'pixi.js';
import GameObject from 'core/game-object';
import Graphics from 'core/graphics';
import Physics from 'core/physics';
import Matter from 'matter-js';

export default class Player extends GameObject {
  constructor(game) {
    const { texture } = Pixi.loader.resources.survivor;
    const sprite = new Graphics.Sprite(texture);
    sprite.x = game.renderer.width / 2;
    sprite.y = game.renderer.height / 2;

    const rigidBody = new Physics.Rectangle(sprite.x, sprite.y, texture.orig.width, texture.orig.height, { debug: true });

    super(game, sprite, rigidBody);

    this.speed = 4;
    this.update = this.update.bind(this);
    game.pointer.emitter.subscribe('move', e => this.lookTo(e.x, e.y));
  }

  update(deltaTime) {
    const { space, w, a, s, d } = this.game.keyboard.keys;

    this.speed = space.isDown ? 8 : 4;
    const frameSpeed = this.speed * deltaTime;

    if (w.isDown) {
      this.sprite.y -= frameSpeed;
    }

    if (s.isDown) {
      this.sprite.y += frameSpeed;
    }

    if (d.isDown) {
      this.sprite.x += frameSpeed;
    }

    if (a.isDown) {
      this.sprite.x -= frameSpeed;
    }
  }

  lookTo(x, y) {
    const target = new Vector(x, y);
    const playerP = new Vector(this.sprite.position.x, this.sprite.position.y);

    const distance = target.distanceTo(playerP);

    const angle = Math.atan2(target.y - playerP.y, target.x - playerP.x);

    const degree = toDegree(angle);
    this.sprite.rotation = angle;
  }
}
