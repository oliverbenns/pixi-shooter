import Sprite from 'core/sprite';

export default class Player extends Sprite {
  constructor(game, texture) {
    super(texture);

    this.x = game.renderer.width / 2;
    this.y = game.renderer.height / 2;

    // Rotate around the center
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;

    this.update = this.update.bind(this);
  }

  update(deltaTime) {
    this.rotation += 0.05 * deltaTime;
  }
}
