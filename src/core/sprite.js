import * as Pixi from 'pixi.js';

// @NOTE: This is doing nothing right now. Maybe I compose this instead. eg. class GameObject { sprite: Pixi.Sprite }
export default class Sprite extends Pixi.Sprite {
  constructor(texture) {
    super(texture);
  }
}
