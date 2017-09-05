import Emitter from 'core/emitter';
import MouseButton from './button';

// @TODO: Add support for durations / dragging / to/from.
// @TODO: Add touch support

export default class Pointer {
  constructor(game) {
    this.game = game;
    this.canvas = this.game.renderer.view;

    this.left = new MouseButton(0);
    this.right = new MouseButton(2);

    this.onClick = this.onClick.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);

    this.emitter = new Emitter();

    this.canvas.addEventListener('mousemove', this.onMouseMove  , true);
    this.canvas.addEventListener('mousedown', e => this.onClick(e, this.onMouseDown), true);
    this.canvas.addEventListener('mouseup', e => this.onClick(e, this.onMouseUp), true);
  }

  onMouseMove(e) {
    const position = this.getPosition(e);
    this.emitter.publish('move', position);
  }

  onClick(e, fn) {
    const mouseButton = [this.left, this.right].find(b => b.code === e.button);

    if (!mouseButton) {
      return;
    }

    return fn(e, mouseButton);
  }

  getPosition(e) {
    const offset = this.canvas.getBoundingClientRect();

    return {
      x: e.clientX - offset.left,
      y: e.clientY - offset.top,
    };
  }

  onMouseDown(e, button) {
    const position = this.getPosition(e);

    // @TODO: Not 'world' coordinates, as world would take into account camera etc.
    // This just makes it relative to canvas.
    button.position.x = position.x;
    button.position.y = position.y;
    button.down = true;

    button.publish('down');
  }

  onMouseUp(e, button) {
    const position = this.getPosition(e);
    button.position.x = position.x;
    button.position.y = position.y;
    button.down = false;

    button.publish('up');
  }

  stop() {
    this.canvas.removeEventListener('mousedown', this.onMouseDown, true);
    this.canvas.removeEventListener('mouseup', this.onMouseUp, true);
  }
}
