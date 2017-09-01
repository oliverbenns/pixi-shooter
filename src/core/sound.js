export default class Sound {
  static context = new AudioContext();
  static cache = {};

  constructor(url, { loop = false, playing = false, speed = 1, volume = 1 } = {}) {
    this.node = Sound.context.createBufferSource();
    this.gainNode = Sound.context.createGain();
    this.node.connect(this.gainNode);
    this.gainNode.connect(Sound.context.destination);

    this.loading = true;
    this.loop = loop;
    this.playing = playing;
    this.speed = speed;
    this.volume = volume;

    this.promise = this.load(url);
    this.play = this.play.bind(this);
  }

  load(url) {
    const cache = Sound.cache[url];

    if (cache) {
      this.connectData(cache);
      this.node.buffer = cache;
      this.loading = false;
      return;
    }

    return fetch(url)
      .then(res => res.arrayBuffer())
      .then(buffer => Sound.context.decodeAudioData(buffer))
      .then(data => {
        // Memoize
        Sound.cache[url] = data;
        this.node.buffer = data;
        this.loading = false;
      })
      .catch(err => {
        console.error(`Error loading sound from ${url}`, err);
        this.error = err;
      });
  }

  play() {
    if (this.playing || this.error) {
      return;
    }

    if (this.loading) {
      this.promise.then(this.play);
      return;
    }

    this.playing = true;
    this.node.start();
  }

  pause() {
    this.playing = false;
  }

  stop() {
    this.playing = false;
    this.node.stop();
  }

  restart() {
    this.stop();
    this.start();
  }

  get loop() {
    return this.node.loop;
  }

  set loop(b) {
    this.node.loop = b;
  }

  get speed() {
    return this.node.playbackRate.value;
  }

  set speed(f) {
    this.node.playbackRate.value = f;
  }

  get volume() {
    return this.gainNode.gain.value;
  }

  set volume(f) {
    this.gainNode.gain.value = f;
  }
}
