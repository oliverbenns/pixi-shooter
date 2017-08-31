import Game from 'core/game'
import { DISPLAY } from 'core/constants';
import Keyboard, { KEYS } from 'core/input/keyboard';

import MainScene from 'game/main-scene';

const game = new Game({
  selector: '#game',
  display: DISPLAY.WIDE,
  width: 800,
});

const assets = [
  { name: 'survivor', url: 'assets/img/survivor.png' },
  { name: 'crate', url: 'assets/img/crate.png' },
];

game.load(assets, resources => {
  game.keyboard = new Keyboard([ KEYS.W, KEYS.A, KEYS.S, KEYS.D, KEYS.SPACE ]);
  const mainScene = new MainScene(game, resources);

  game.ticker.add(mainScene.update);
});
