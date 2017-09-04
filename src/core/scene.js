import Graphics from 'core/graphics';

export default class Scene {
  constructor(game) {
    this.game = game;
    this.gameObjects = [];
    // this.active = false;
    this.stage = new Graphics.Container();
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    // console.log('this.container', this.container);

    // this.game.stage.addChild(this.stage);
  }

  add(gameObject) {
    // @TODO: What if it doesnt have a sprite? What if I want to add another pixi obj?
    if (gameObject.sprite) {
      // this is the issue. Maybe we want a physics world and a renderer PER scene?
      // Or maybe just a pixi container that we can toggle.
      // This probably depends on how expensive having multiple renderers + worlds are.
      this.stage.addChild(gameObject.sprite);
    }

    this.gameObjects.push(gameObject);
  }

  update(deltaTime) {
    // if (!this.active) {
    //   return;
    // }
    console.log('adwad');

    this.gameObjects.forEach(o => {
      o.updatePhysics(deltaTime); // o.body ?
      o.update(deltaTime);
    });
  }

  // @TODO: Do I even really need a parent stage?
  start() {
    this.game.stage.addChild(this.stage);
  }

  stop() {
    this.game.stage.removeChild(this.stage);
  }
}
