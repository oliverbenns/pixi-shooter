import * as Pixi from 'pixi.js';
import { DISPLAY } from 'core/constants'
import Physics from 'core/physics';

export default class Game extends Pixi.Application {
  constructor({ display, onLoad, selector, width = window.innerWidth }) {
    const domElement = document.querySelector(selector);

    if (!domElement || !(domElement instanceof HTMLCanvasElement)) {
      console.error(`Canvas element '${selector}' not found`);
    }

    // @TODO: Do better checking here.
    if (!display.x || !display.y) {
      display = DISPLAY.STANDARD;
      console.warn(`Invalid display, game using standard ${display.x}:${display.y} ratio`);
    }

    super({
      width,
      height: width / display.x * display.y,
      antialias: true,
      view: domElement,
    });

    this.update = this.update.bind(this);
    this.engine = new Physics.Engine.create();
    this.ticker.add(this.update);
  }

  // Right now this is bulk loading all assets.
  load(assets, callback) {
    assets.forEach(asset => Pixi.loader.add(asset.name, asset.url));

    Pixi.loader.load((loader, resources) => callback(resources));
  }

  update(deltaTime) {
    // https://github.com/liabru/matter-js/issues/57#issuecomment-289894977
    const ms = deltaTime * (1000 / 60);
    Physics.Engine.update(this.engine, ms);
  }
}
