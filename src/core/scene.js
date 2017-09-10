import Graphics from 'core/graphics';

export default class Scene {
  constructor() {
    this.gameObjects = [];
    this.stage = new Graphics.Container();
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
  }

  add(gameObject) {
    // @TODO: What if it doesnt have a sprite? What if I want to add another pixi obj?
    if (gameObject.sprite) {
      this.stage.addChild(gameObject.sprite);
    } else if (gameObject instanceof Graphics.Text) {
      this.stage.addChild(gameObject);
    }

    if (gameObject.rigidBody && gameObject.rigidBody.debugger) {
      this.stage.addChild(gameObject.rigidBody.debugger);
    }

    this.gameObjects.push(gameObject);
  }

  update(deltaTime) {
    this.gameObjects.forEach(o => {
      if (o.rigidBody) {
        o.updatePhysics(deltaTime); // o.body ?
        o.update(deltaTime);
        o.rigidBody.update();
      }
    });
    // debugger;
  }
}
