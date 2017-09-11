import Graphics from 'core/graphics';
import GameObject from 'core/game-object';

export default class Scene {
  constructor() {
    this.gameObjects = [];
    this.stage = new Graphics.Container();
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
  }

  add(gameObject) {
    this.stage.addChild(gameObject);
    this.gameObjects.push(gameObject);

    if (gameObject.body && gameObject.body.debugger) {
      this.stage.addChild(gameObject.body.debugger);
    }
  }

  update(deltaTime) {
    this.gameObjects.forEach(o => {
      if (o.body) {
        o.update(deltaTime);
        o.postUpdatePhysics(deltaTime);
        o.body.update();
      }
    });
  }
}
