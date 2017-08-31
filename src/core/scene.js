export default class Scene {
  constructor(game) {
    this.game = game;
    this.gameObjects = [];

    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
  }

  add(gameObject) {
    this.game.stage.addChild(gameObject);
    this.gameObjects.push(gameObject);
  }

  update(deltaTime) {
    this.gameObjects.forEach(o => o.update(deltaTime));
  }
}
