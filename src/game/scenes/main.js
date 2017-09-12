import Scene from 'core/scene';

import Crate from 'game/objects/crate';
import Player from 'game/objects/player';
import Zombie from 'game/objects/zombie';

export default class MainScene extends Scene {
  constructor(game) {
    super(game);

    this.player = new Player(game);

    const objects = [
      this.player,
      new Crate(game, 200, 50),
      // new Zombie(game, 200, 200),
      new Zombie(game, 600, 400),
      // new Zombie(game, 300, 250),
    ];

    objects.forEach(this.add);
  }
}
