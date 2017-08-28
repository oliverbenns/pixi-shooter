import * as Pixi from 'pixi.js';

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container.
const app = new Pixi.Application();

// The application will create a canvas element for you that you
// can then insert into the DOM.
document.body.appendChild(app.view);

// load the texture we need
Pixi.loader.add('icon', 'assets/img/favicon.png').load((loader, resources) => {
  // This creates a texture from an image.
  const sprite = new Pixi.Sprite(resources.icon.texture);

  // Setup the position of the sprite
  sprite.x = app.renderer.width / 2;
  sprite.y = app.renderer.height / 2;

  // Rotate around the center
  sprite.anchor.x = 0.5;
  sprite.anchor.y = 0.5;

  // Add the sprite to the scene we are building.
  app.stage.addChild(sprite);

  // Listen for frame updates
  app.ticker.add(() => sprite.rotation += 0.05);
});
