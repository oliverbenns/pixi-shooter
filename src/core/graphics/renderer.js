import { WebGLRenderer } from 'pixi.js';

export default class Renderer extends WebGLRenderer {
  constructor({ width, height, view }) {
    console.log('view', view);
    super({ height, view, width, antialias: true });

    if (!view) {
      document.body.appendChild(this.view);
    }

    // Disable right click
    this.view.oncontextmenu = e => e.preventDefault();
  }
}
