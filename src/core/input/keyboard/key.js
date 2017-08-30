import { NAMED_KEYS } from './keys';

export default class Key {
  constructor(code) {
    this.code = code;
    this.isPressed = false;
    this.isDown = false;
  }

  getChar() {
    return String.fromCharCode(this.code);
  }

  getName() {
    // If named key, give us that back.
    for (const key in NAMED_KEYS) {
      const value = NAMED_KEYS[key];
      if (value === this.code) {
        return key.toLowerCase();
      }
    }

    const isNumber = this.code >= 48 && this.code < 58;
    const name = this.getChar().toLowerCase();

    return isNumber ? `_${name}` : name;
  }
}

