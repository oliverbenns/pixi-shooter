import KEYS from 'core/input/keys';
import Key from 'core/input/key';

export { KEYS };

export default class KeyboardManager {
  constructor(keyCodes) {
    this.keys = keyCodes.map(c => new Key(c));

    this.onDown = this.onDown.bind(this);
    this.onUp = this.onUp.bind(this);

    window.addEventListener('keydown', e => this.onEvent(e, this.onDown), true);
    window.addEventListener('keyup', e => this.onEvent(e, this.onUp), true);
  }

  onEvent(e, fn) {
    e.preventDefault();
    const keyCode = e.which || e.keyCode;
    const key = this.getKey(keyCode);

    if (key) {
      fn(key);
    }
  }

  getKey(code) {
    return this.keys.find(k => k.code === code);
  }

  onDown(key) {
    if (!key.down) {
      key.down = true;
    }
  }

  onUp(key) {
    if (key.down) {
      key.down = false;
    }
  }

  add(code) {
    const key = this.getKey(code);
    const char = String.fromCharCode(code);

    if (key) {
      console.warn(`Key '${char}' is already being listened for`);
      return;
    }

    if (!KEYS[char]) {
      console.warn(`You cannot listen for the '${char}' key`);
      return;
    }

    this.keys.push(new Key(code));
  }

  remove(code) {
    const key = this.getKey(code);

    if (!key) {
      const char = String.fromCharCode(code);

      console.warn(`Key '${char}' isn't being listened for`);
      return;
    }

    const index = this.keys.indexOf(key);

    if (index > -1) {
      this.keys.splice(index, 1);
    }
  }
}
