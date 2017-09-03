export default class Scene {
  constructor(game) {
    this.game = game;
    this.gameObjects = [];
    // this.active = false;

    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
  }

  add(gameObject) {
    // @TODO: What if it doesnt have a sprite? What if I want to add another pixi obj?
    if (gameObject.sprite) {
      // this is the issue. Maybe we want a physics world and a renderer PER scene?
      // Or maybe just a pixi container that we can toggle.
      // This probably depends on how expensive having multiple renderers + worlds are.
      this.game.stage.addChild(gameObject.sprite);
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

  // get active() {
  //   this.game.scenes.active === this;
  // }

  // activate() {
  //   this.active = true;
  // }

  // or pause?
  // deactivate() {
    // @TODO: Remove all bodies from Physics.World / this.game.engine.world.
    // this.active = false;
  // }
}
