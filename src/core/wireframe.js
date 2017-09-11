import Graphics from 'core/graphics';

export default class Wireframe extends Graphics.Paint {
  constructor() {
    super();
    this.update = this.update.bind(this);
  }

  update(vertices) {
    const end = vertices[vertices.length - 1];

    this.clear();
    this.moveTo(end.x, end.y);
    this.lineStyle(1, 0xffffff);
    vertices.forEach(v => this.lineTo(v.x, v.y));
  }
}
