import * as Pixi from 'pixi.js';

// @NOTe: This is doing nothing right now. Maybe I have compose this instead. eg. class GameObject { sprite: Pixi.Sprite }
export default class Sprite extends Pixi.Sprite {
  constructor(texture) {
    super(texture);
  }
}
