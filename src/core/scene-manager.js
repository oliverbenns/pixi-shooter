import Scene from './scene';

export default class SceneManager {
  constructor(game) {
    this.game = game;
    this.active = null;
    this.scenes = {};
  }

  add(name, scene) {
    if (!name) {
      console.error(`Move provide a scene name`);
      return;
    }

    if (!scene || !(scene instanceof Scene)) {
      console.error(`Invalid scene attempted to be added. Must be instance of Scene`);
      return;
    }

    if (this.scenes[name]) {
      console.error(`Scene already exists with name '${name}'`);
      return;
    }

    this.scenes[name] = scene;
  }

  isActive(name) {
    return this.scenes[name] === this.active;
  }

  remove(name) {
    const scene = this.scenes[name];
    if (!scene) {
      console.warn(`No scene with name '${name}'`);
      return;
    }

    if (this.isActive(name)) {
      console.error('Cannot remove the current active scene');
      return;
    }

    delete this.scenes[name];
  }

  start(name) {
    const scene = this.scenes[name];

    if (!scene) {
      console.warn(`No scene with name '${name}'`);
      return;
    }

    if (this.isActive(name)) {
      return;
    }

    if (this.active) {
      this.active.stop();
    }

    this.active = scene;
    this.active.start();
  }

  updateActive(deltaTime) {
    if (this.active) {
      this.active.update(deltaTime);
    }
  }
}
