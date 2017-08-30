import * as Pixi from 'pixi.js';
import Game from 'core/game';
import Player from 'game/player';
import { DISPLAY } from 'core/constants';
import KeyboardManager, { KEYS } from 'core/input/keyboard-manager';

const game = new Game({
  selector: '#game',
  display: DISPLAY.WIDE,
});

const assets = [
  { name: 'icon', url: 'assets/img/favicon.png' },
];

game.load(assets, resources => {
  // This creates a texture from an image.
  const player = new Player(game, resources.icon.texture);

  // Add the sprite to the scene we are building.
  game.stage.addChild(player);

  // Listen for frame updates
  game.ticker.add(player.update);

  this.input = new KeyboardManager([KEYS.W, KEYS.A, KEYS.S, KEYS.D]);

  game.ticker.add(player.update);
});
