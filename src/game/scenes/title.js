import Graphics from 'core/graphics';
import Scene from 'core/scene';

import Player from 'game/objects/player';
import Crate from 'game/objects/crate';

const textStyle = { fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center' };

export default class TitleScene extends Scene {
  constructor(game) {
    super(game);
    const text = new Graphics.Text('This is a PixiJS text', textStyle);
    text.position.x = 100;
    text.position.y = 100;

    const objects = [
      // new Crate(game, 500, 50),
      new Crate(game, 600, 100),
      new Crate(game, 700, 150),
      text
    ];
    console.log('text', text);

    objects.forEach(this.add);
  }
}
