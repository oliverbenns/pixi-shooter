import Sprite from 'core/sprite';
import Vector from 'core/vector';
import { toDegree } from 'lib/math';

export default class Player extends Sprite {
  constructor(game, texture) {
    super(texture);

    this.game = game;

    this.x = game.renderer.width / 2;
    this.y = game.renderer.height / 2;

    // Rotate around the center
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.speed = 4;

    this.update = this.update.bind(this);
    this.game.renderer.plugins.interaction.on('mousemove', e => {
      const { x, y } = e.data.global;
      this.lookTo(x, y);
    });
  }

  update(deltaTime) {
    const { space, w, a, s, d } = this.game.keyboard.keys;

    this.speed = space.isDown ? 8 : 4;

    if (w.isDown) {
      this.y -= this.speed * deltaTime;
    }

    if (s.isDown) {
      this.y += this.speed * deltaTime;
    }

    if (d.isDown) {
      this.x += this.speed * deltaTime;
    }

    if (a.isDown) {
      this.x -= this.speed * deltaTime;
    }
  }

  lookTo(x, y) {
    const target = new Vector(x, y);
    const playerP = new Vector(this.position.x, this.position.y);

    const distance = target.distanceTo(playerP);

    const angle = Math.atan2(target.y - playerP.y, target.x - playerP.x);

    const degree = toDegree(angle);
    // console.log('degree', degree);
    this.rotation = angle;
  }
}
