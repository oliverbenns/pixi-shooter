import Game from 'core/game'
import { DISPLAY } from 'core/constants';
import Keyboard, { KEYS } from 'core/input/keyboard';
import { Bodies, Engine, World } from 'core/physics';

import MainScene from 'game/main-scene';
import Sound from 'core/sound';

const engine = Engine.create();

const game = new Game({
  selector: '#game',
  display: DISPLAY.WIDE,
  width: 800,
});

const assets = [
  { name: 'survivor', url: 'assets/img/survivor.png' },
  { name: 'crate', url: 'assets/img/crate.png' },
];

const sound = new Sound('assets/audio/sfx.mp3');
sound.play();

game.load(assets, resources => {
  game.keyboard = new Keyboard([ KEYS.W, KEYS.A, KEYS.S, KEYS.D, KEYS.SPACE ]);
  const mainScene = new MainScene(game, resources);
  const player = mainScene.gameObjects[0]

  const body = Bodies.rectangle(50, 50, 50, 50);
  player.body = body;
  World.add(engine.world, body);

  game.ticker.add(deltaTime => {
    mainScene.update(deltaTime);
    const player = mainScene.gameObjects[0];

    // https://github.com/liabru/matter-js/issues/57#issuecomment-289894977
    const ms = deltaTime * (1000 / 60);
    Engine.update(engine, ms);

    player.sprite.position.x = player.body.position.x;
    player.sprite.position.y = player.body.position.y;
  });
});
