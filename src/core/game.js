import * as Pixi from 'pixi.js';
import Physics from 'core/physics';
import Graphics from 'core/graphics';

import SceneManager from 'core/scene-manager';

export default class Game {
  constructor(view, { height = 600, width = 800 } = {}) {
    this.renderer = new Graphics.Renderer({ width, height, view });
    this.engine = Physics.Engine.create();
    Physics.World.createWalls(this.engine.world, width, height);

    this.scenes = new SceneManager();

    this.ticker = new Pixi.ticker.Ticker();

    this.ticker.add(this.update, this);
    this.ticker.start();
  }

  // Right now this is bulk loading all assets.
  load(assets, callback) {
    assets.forEach(asset => Pixi.loader.add(asset.name, asset.url));

    Pixi.loader.load((loader, resources) => callback(resources));
  }

  update(deltaTime) {
    // Physics
    // https://github.com/liabru/matter-js/issues/57#issuecomment-289894977
    // @TODO: Figure out how to only render the current stage, right now we are adding all objects to global world.
    const ms = deltaTime * (1000 / 60);
    Physics.Engine.update(this.engine, ms);

    // Graphics
    if (this.scenes.active) {
      this.renderer.render(this.scenes.active.stage);
    }
    this.scenes.updateActive(deltaTime);
  }
}

