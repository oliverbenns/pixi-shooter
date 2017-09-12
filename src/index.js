import Game from 'core/game'
import Keyboard, { KEYS } from 'core/input/keyboard';
import Pointer from 'core/input/pointer';
import Sound from 'core/sound';

import MainScene from 'game/scenes/main';
import TitleScene from 'game/scenes/title';

const canvas = document.querySelector('#game');

const game = new Game(canvas);

game.engine.world.gravity.scale = 0;

const assets = [
  { name: 'survivor', url: 'assets/img/survivor.png' },
  { name: 'zombie', url: 'assets/img/zombie.png' },
  { name: 'crate', url: 'assets/img/crate.png' },
];

// const sound = new Sound('assets/audio/sfx.mp3');
// sound.play();

game.load(assets, resources => {
  game.keyboard = new Keyboard([ KEYS.W, KEYS.A, KEYS.S, KEYS.D, KEYS.SPACE ]);
  game.pointer = new Pointer(game);

  const mainScene = new MainScene(game, resources);
  // const titleScene = new TitleScene(game, resources);

  // game.scenes.add('title', titleScene);
  game.scenes.add('main', mainScene);

  game.scenes.start('main');
});
