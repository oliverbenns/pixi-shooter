import Graphics from 'core/graphics'

export default class Debugger extends Graphics.Paint {
  constructor() {
    super();
    this.update = this.update.bind(this);
  }

  update(vertices) {
    this.clear();
    const end = vertices[vertices.length - 1];

    this.moveTo(end.x, end.y);
    this.lineStyle(1, 0xffffff);
    vertices.forEach(v => this.lineTo(v.x, v.y));
  }
}
