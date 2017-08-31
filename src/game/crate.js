import Sprite from 'core/sprite';

export default class Crate extends Sprite {
  constructor(game, texture) {
    super(texture);

    this.game = game;

    this.x = 100;
    this.y = 100;

    this.update = this.update.bind(this);
  }

  update(deltaTime) {

  }
}
