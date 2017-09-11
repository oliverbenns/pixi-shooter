import { Container, Graphics, Sprite as PixiSprite, Text } from 'pixi.js';
import Renderer from './renderer';

class Sprite extends PixiSprite {
  constructor() {
    super(...arguments);
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
  }
}

export default {
  Container,
  Paint: Graphics,
  Renderer,
  Sprite,
  Text,
};
