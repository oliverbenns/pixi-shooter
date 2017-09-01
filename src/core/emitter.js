export default class Emitter {
  constructor() {
    this.events = {};
  }

  subscribe(name, fn) {
    if (!this.events[name]) {
      this.events[name] = [];
    }

    this.events[name].push(fn);
  }

  unsubscribe(name, fn) {
    const handlers = this.events[name];
    if (!handlers) {
      return;
    }
    const index = handlers.findIndex(h => h === fn);

    if (index > -1) {
      handlers.splice(index, 1);
    }

    if (handlers.length === 0) {
      delete this.events[name];
    }
  }

  publish(name, data = null) {
    const handlers = this.events[name];
    if (!handlers) {
      return;
    }

    handlers.forEach(h => h(data));
  }
}
