import Vector from 'core/vector';
import GameObject from 'core/game-object';
import Physics from 'core/physics';

export default class Humanoid extends GameObject {
  constructor(game, texture, config) {
    const body = new Physics.Rectangle(null, null, texture.orig.width, texture.orig.height);

    super(game, texture, { ...config, body, debug: true });
    this.game = game;
  }

  lookTo(x, y) {
    const target = new Vector(x, y);
    const playerP = new Vector(this.x, this.y);

    const angle = Math.atan2(target.y - playerP.y, target.x - playerP.x);

    this.rotation = angle;
    this.body.angle = angle;
  }
}
