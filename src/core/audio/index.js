
// class Audio
  // Members
    // volume = 1
    // loop = true (or int or have seperate value: repeat? VLC has both repeat and loop.)
    // cache (do I need a cache or will this go through the seperate loader?)
    // playbackSpeed/speed
    // playing
    // offset
  // methods
    // play
    // pause
    // stop
    // restart
    // jumpTo(ms)

// class SoundEffect
  // Inherit Audio
  // loop: false
  // slight volume increase over track? Not over 1 incase of distortion

// class Track
  // Inherit Audio
  // loop: true
  // slight volume decrease?
