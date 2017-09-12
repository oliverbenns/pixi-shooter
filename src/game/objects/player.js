import Vector from 'core/vector';
import * as Pixi from 'pixi.js';
import Physics from 'core/physics';
import Humanoid from 'game/objects/humanoid';

export default class Player extends Humanoid {
  constructor(game) {
    const { texture } = Pixi.loader.resources.survivor;
    const x = game.renderer.width / 2;
    const y = game.renderer.height / 2;

    super(game, texture, { x, y });

    this.speed = 4;
    this.update = this.update.bind(this);
    game.pointer.emitter.subscribe('move', e => this.lookTo(e.x, e.y));
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

    Physics.Body.setPosition(this.body, { x: this.x, y: this.y });
  }
}
