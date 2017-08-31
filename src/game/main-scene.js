import Crate from 'game/crate';
import Player from 'game/player';
import Scene from 'core/scene';

export default class MainScene extends Scene {
  constructor(game) {
    super(game);

    const objects = [
      new Player(game),
      new Crate(game),
    ];

    objects.forEach(this.add);
  }
}
