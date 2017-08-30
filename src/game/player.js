import Sprite from 'core/sprite';

export default class Player extends Sprite {
  constructor(game, texture) {
    super(texture);

    this.game = game;

    this.x = game.renderer.width / 2;
    this.y = game.renderer.height / 2;

    // Rotate around the center
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.speed = 2;

    this.update = this.update.bind(this);
  }

  update(deltaTime) {
    const { space, w, a, s, d } = this.game.keyboard.keys;

    this.speed = space.isDown ? 4 : 2;

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
}
