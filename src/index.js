import Game from 'core/game'
import { DISPLAY } from 'core/constants';
import Keyboard, { KEYS } from 'core/input/keyboard';
import Sound from 'core/sound';

import MainScene from 'game/main-scene';

const game = new Game({
  selector: '#game',
  display: DISPLAY.WIDE,
  width: 800,
});

game.engine.world.gravity.scale = 0.0001;

const assets = [
  { name: 'survivor', url: 'assets/img/survivor.png' },
  { name: 'crate', url: 'assets/img/crate.png' },
];

const sound = new Sound('assets/audio/sfx.mp3');
sound.play();

game.load(assets, resources => {
  game.keyboard = new Keyboard([ KEYS.W, KEYS.A, KEYS.S, KEYS.D, KEYS.SPACE ]);
  const mainScene = new MainScene(game, resources);

  game.ticker.add(deltaTime => {
    mainScene.update(deltaTime);
  });
});
