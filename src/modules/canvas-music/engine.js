// src/modules/canvas-music/engine.js
export const id = "canvas-music";
export const name = "Canvas Music";

let state = {
  playing: false,
  time: 0,
  bpm: 120,
  layers: [], // visual/music layers
  seed: null
};

export function load() {
  if (!state.seed) state.seed = crypto.randomUUID();
  return state;
}

export function update(next) {
  state = { ...state, ...next };
  return state;
}

export function reset() {
  state = {
    playing: false,
    time: 0,
    bpm: 120,
    layers: [],
    seed: crypto.randomUUID()
  };
  return state;
}
