const keys = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  ENTER: 13,
  SPACE: 32,
  SHIFT: 16,
};

for (let code = 48; code < 58; code++) {
  const char = String.fromCharCode(code);

  keys[`_${char}`] = code;
}

for (let code = 65; code < 91; code++) {
  const char = String.fromCharCode(code);
  keys[char] = code;
}

export default keys;
