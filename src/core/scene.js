export default class Scene {
  constructor(game) {
    this.game = game;
    this.gameObjects = [];

    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
  }

  add(gameObject) {
    // @TODO: What if it doesnt have a sprite? What if I want to add another pixi obj?
    if (gameObject.sprite) {
      this.game.stage.addChild(gameObject.sprite);
    }

    this.gameObjects.push(gameObject);
  }

  update(deltaTime) {
    this.gameObjects.forEach(o => o.update(deltaTime));
  }
}
