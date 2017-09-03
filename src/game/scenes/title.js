import Scene from 'core/scene';

import Player from 'game/objects/player';
import Crate from 'game/objects/crate';

export default class TitleScene extends Scene {
  constructor(game) {
    super(game);

    const objects = [
      new Crate(game, 500, 50),
      new Crate(game, 600, 100),
      new Crate(game, 700, 150),
    ];

    objects.forEach(this.add);
  }
}
