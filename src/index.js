import Game from 'core/game'
import { DISPLAY } from 'core/constants';
import Keyboard, { KEYS } from 'core/input/keyboard';
import Pointer from 'core/input/pointer';
import Sound from 'core/sound';

import MainScene from 'game/scenes/main';
import TitleScene from 'game/scenes/title';

const game = new Game({
  selector: '#game',
  display: DISPLAY.WIDE,
  width: 800,
});

game.engine.world.gravity.scale = 0.00005;

const assets = [
  { name: 'survivor', url: 'assets/img/survivor.png' },
  { name: 'crate', url: 'assets/img/crate.png' },
];

// const sound = new Sound('assets/audio/sfx.mp3');
// sound.play();

game.load(assets, resources => {
  game.keyboard = new Keyboard([ KEYS.W, KEYS.A, KEYS.S, KEYS.D, KEYS.SPACE ]);
  game.pointer = new Pointer(game);

  game.pointer.left.emitter.subscribe('down', (e) => {
    console.log('e', e);
    console.log('pressed down');
  });

  game.pointer.left.emitter.subscribe('up', (e) => {
    console.log('e', e);
    console.log('pressed up');
  });

  const mainScene = new MainScene(game, resources);
  const titleScene = new TitleScene(game, resources);

  game.scenes.add('title', titleScene);
  game.scenes.add('main', mainScene);

  game.scenes.start('title');
});
