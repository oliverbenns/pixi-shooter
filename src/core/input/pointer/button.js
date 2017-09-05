import Emitter from 'core/emitter';
import Vector from 'core/vector';

export default class MouseButton {
  constructor(code) {
    this.down = false;
    this.code = code;

    // @TODO: Compose this better so we can just do button.subscribe('click', fn), button.x.
    // Object.assign();
    this.emitter = new Emitter();
    this.position = new Vector();
  }

  publish(eventName) {
    this.emitter.publish(eventName, this.position);
  }
}
