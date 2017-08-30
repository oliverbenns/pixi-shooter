// All the keys that are allowed to be listened.
// Pretty much all alphanumeric + those in initial obj literal.
// Ctrl, cmd, alt, etc not allowed as these are often mapped to OS functionality.
// Not allowed: ;,.[]/ etc because no one uses them in games and I didn't want to include all ANSI chars as it would take up too much memory.

const KEYS = {
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

  KEYS[`_${char}`] = code;
}

for (let code = 65; code < 91; code++) {
  const char = String.fromCharCode(code);
  KEYS[char] = code;
}

export default KEYS;
