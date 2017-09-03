import Scene from 'core/scene';

import Player from 'game/objects/player';
import Crate from 'game/objects/crate';

export default class MainScene extends Scene {
  constructor(game) {
    super(game);

    const objects = [
      new Player(game),
      new Crate(game, 200, 50),
    ];

    objects.forEach(this.add);
  }
}
