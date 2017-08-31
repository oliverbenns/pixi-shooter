import * as Pixi from 'pixi.js';
import Game from 'core/game';
import Crate from 'game/crate';
import Player from 'game/player';

import { DISPLAY } from 'core/constants';
import Keyboard, { KEYS } from 'core/input/keyboard';
import Mouse from 'core/input/mouse';
import Vector from 'core/vector';
import { toDegree } from 'lib/math';
import Scene from 'core/scene';

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
  const scene = new Scene(game);
  const player = new Player(game, resources.survivor.texture);
  const crate = new Crate(game, resources.crate.texture);

  scene.add(player);
  scene.add(crate);

  game.ticker.add(scene.update);

  game.keyboard = new Keyboard([ KEYS.W, KEYS.A, KEYS.S, KEYS.D, KEYS.SPACE ]);

  game.renderer.plugins.interaction.on('mousemove', e => {
    const mouseP = new Vector(e.data.global.x, e.data.global.y);
    const playerP = new Vector(player.position.x, player.position.y);

    const distance = mouseP.distanceTo(playerP);

    const angle = Math.atan2(mouseP.y - playerP.y, mouseP.x - playerP.x);

    const degree = toDegree(angle);
    // console.log('degree', degree);
    player.rotation = angle;
  });

  // gameObjects.forEach(o => game.ticker.add(o.update));
});
