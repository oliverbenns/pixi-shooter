import Vector from 'core/vector';
import * as Pixi from 'pixi.js';
import Humanoid from 'game/objects/humanoid';
import Physics from 'core/physics';

export default class Zombie extends Humanoid {
  constructor(game, x, y) {
    const { texture } = Pixi.loader.resources.zombie;

    super(game, texture, { x, y });

    this.speed = 4;
    this.update = this.update.bind(this);
  }

  update(deltaTime) {
    const { player } = this.game.scenes.active;

    this.lookTo(player.x, player.y);

    const position = new Vector(this.y, this.x);
    const frameSpeed = this.speed * deltaTime;

    const direction = position
      .distanceTo({ x: player.x, y: player.y })
      .normalise();

    this.x += direction.x * frameSpeed;
    this.y += direction.y * frameSpeed;

    // Physics.Body.setPosition(this.body, { x: this.x, y: this.y });

    // Get distance vector of zombie to player
    // Normalise the distance vector
    // Move zombie to direction
  }
}
