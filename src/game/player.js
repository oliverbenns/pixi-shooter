import Vector from 'core/vector';
import { toDegree } from 'lib/math';
import * as Pixi from 'pixi.js';
import GameObject from 'core/game-object';
import Graphics from 'core/graphics';
import Physics from 'core/physics';

export default class Player extends GameObject {
  constructor(game) {
    const { texture } = Pixi.loader.resources.survivor;
    const sprite = new Graphics.Sprite(texture);
    const rigidBody = new Physics.Rectangle(50, 50, 50, 50);

    super(game, sprite, rigidBody);

    this.sprite.x = game.renderer.width / 2;
    this.sprite.y = game.renderer.height / 2;

    // Rotate around the center
    this.sprite.anchor.x = 0.5;
    this.sprite.anchor.y = 0.5;
    this.speed = 4;

    this.update = this.update.bind(this);
    this.game.renderer.plugins.interaction.on('mousemove', e => {
      const { x, y } = e.data.global;
      this.lookTo(x, y);
    });
  }

  update(deltaTime) {
    const { space, w, a, s, d } = this.game.keyboard.keys;

    this.speed = space.isDown ? 8 : 4;

    if (w.isDown) {
      this.sprite.y -= this.speed * deltaTime;
    }

    if (s.isDown) {
      this.sprite.y += this.speed * deltaTime;
    }

    if (d.isDown) {
      this.sprite.x += this.speed * deltaTime;
    }

    if (a.isDown) {
      this.sprite.x -= this.speed * deltaTime;
    }
  }

  lookTo(x, y) {
    const target = new Vector(x, y);
    const playerP = new Vector(this.sprite.position.x, this.sprite.position.y);

    const distance = target.distanceTo(playerP);

    const angle = Math.atan2(target.y - playerP.y, target.x - playerP.x);

    const degree = toDegree(angle);
    // console.log('degree', degree);
    this.sprite.rotation = angle;
  }
}
