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
    const x = game.renderer.width / 2;
    const y = game.renderer.height / 2;
    const body = new Physics.Rectangle(null, null, texture.orig.width, texture.orig.height, { debug: true });

    super(game, texture, { body, x, y });

    this.game = game;
    this.speed = 4;
    this.update = this.update.bind(this);
    game.pointer.emitter.subscribe('move', e => this._lookTo(e.x, e.y));
  }

  update(deltaTime) {
    const { space, w, a, s, d } = this.game.keyboard.keys;

    this.speed = space.isDown ? 8 : 4;
    const frameSpeed = this.speed * deltaTime;

    if (w.isDown) {
      this.y -= frameSpeed;
      // this.body.matter.position.y -= this.frameSpeed
    }

    if (s.isDown) {
      this.y += frameSpeed;
      // this.body.matter.position.y += this.frameSpeed
    }

    if (d.isDown) {
      this.x += frameSpeed;
      // this.body.matter.position.x += this.frameSpeed
    }

    if (a.isDown) {
      this.x -= frameSpeed;
      // this.body.matter.position.x -= this.frameSpeed
    }
  }

  _lookTo(x, y) {
    const target = new Vector(x, y);
    const playerP = new Vector(this.x, this.y);

    const distance = target.distanceTo(playerP);

    const angle = Math.atan2(target.y - playerP.y, target.x - playerP.x);

    const degree = toDegree(angle);
    this.rotation = angle;
    this.body.matter.angle = angle;
  }
}
