import * as Pixi from 'pixi.js';
import Game from 'core/game';
import Player from 'game/player';
import { DISPLAY } from 'core/constants';
import Keyboard, { KEYS } from 'core/input/keyboard';
import Vector from 'core/vector';
import { toDegree } from 'lib/math';

const game = new Game({
  selector: '#game',
  display: DISPLAY.WIDE,
});

const assets = [
  { name: 'icon', url: 'assets/img/survivor/survivor.png' },
];

game.load(assets, resources => {
  // This creates a texture from an image.
  const player = new Player(game, resources.icon.texture);

  // Add the sprite to the scene we are building.
  game.stage.addChild(player);

  // Listen for frame updates
  game.ticker.add(player.update);

  game.keyboard = new Keyboard([ KEYS.W, KEYS.A, KEYS.S, KEYS.D, KEYS.SPACE ]);

  game.renderer.plugins.interaction.on('mousemove', e => {
    const mouseP = new Vector(e.data.global.x, e.data.global.y);
    const playerP = new Vector(player.position.x, player.position.y);

    const distance = mouseP.distanceTo(playerP);

    const angle = Math.atan2(mouseP.y - playerP.y, mouseP.x - playerP.x);

    const degree = toDegree(angle);
    console.log('degree', degree);
    player.rotation = angle;
  });

  game.ticker.add(player.update);
});
