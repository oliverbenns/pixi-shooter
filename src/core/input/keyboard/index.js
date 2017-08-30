import KEYS from './keys';
import Key from './key';

export { KEYS };

// @TODO: Need to emit events and add callbacks to them.
// @TODO: Add significant tests.
// @TODO: Wire up Key.isPressed (how?)

export default class Keyboard {
  constructor(keyCodes) {
    this.keys = {};

    this.add = this.add.bind(this);
    this.onDown = this.onDown.bind(this);
    this.onUp = this.onUp.bind(this);

    // @TODO: Should be have keycodes in constructor arg or just chain add methods?
    keyCodes.forEach(this.add);

    window.addEventListener('keydown', e => this.onEvent(e, this.onDown), true);
    window.addEventListener('keyup', e => this.onEvent(e, this.onUp), true);
  }

  onEvent(e, fn) {
    // @TODO: Work out if we really need this. Having this right now stops cmd + R and a bunch of other browser stuff.
    // e.preventDefault();
    const key = this.getKey(e.keyCode);

    if (key) {
      fn(key);
    }
  }

  getKey(code) {
    return Object.values(this.keys).find(k => k.code === code);
  }

  onDown(key) {
    if (!key.isDown) {
      key.isDown = true;
    }
  }

  onUp(key) {
    if (key.isDown) {
      key.isDown = false;
    }
  }

  add(code) {
    if (this.getKey(code)) {
      return;
    }

    const allowedKey = Object.values(KEYS).find(c => c === code);

    if (!allowedKey) {
      const char = String.fromCharCode(code);
      console.warn(`You cannot listen for the '${char}' key`);
      return;
    }

    const key = new Key(code);
    this.keys[key.getName()] = key;
  }

  remove(code) {
    const key = this.getKey(code);

    if (key) {
      delete this.keys[key.getName()];
    }
  }
}
