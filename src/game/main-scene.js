import Crate from 'game/crate';
import Player from 'game/player';
import Scene from 'core/scene';

export default class MainScene extends Scene {
  constructor(game, resources) {
    super(game);

    const objects = [
      new Player(game, resources.survivor.texture),
      new Crate(game, resources.crate.texture),
    ];

    objects.forEach(this.add);
  }
}
