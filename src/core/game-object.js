import * as Pixi from 'pixi.js';
import Graphics from 'core/graphics';
import Physics from 'core/physics';
import Wireframe from 'core/wireframe';

// Main container that houses other components.
// Inspired by Unity https://docs.unity3d.com/Manual/class-GameObject.html
export default class GameObject extends Graphics.Sprite {
  constructor(game, texture, config = { body: null, debug: false, x: 0, y: 0 }) {
    super(texture);
    this.game = game;
    this.x = config.x;
    this.y = config.y;

    if (config.body) {
      this.addBody(config.body);
    }

    if (config.debug) {
      this.wireframe = new Wireframe();
    }
  }

  addBody(body) {
    this.body = body;
    Physics.Body.setPosition(this.body, { x: this.x, y: this.y });
    Physics.World.add(this.game.engine.world, this.body);
  }

  // Noop
  update() {}

  // Acts as a super update. Updates physics, extended update methods, etc. Called from scene.
  updateAll(deltaTime) {
    this.preUpdate(deltaTime);
    this.update(deltaTime);
  }

  // Physics
  preUpdate() {
    if (!this.body) {
      return;
    }

    this.rotation = this.body.angle;
    this.x += this.body.velocity.x;
    this.y += this.body.velocity.y;

    if (this.wireframe) {
      this.wireframe.update(this.body.vertices);
    }
  }
}
