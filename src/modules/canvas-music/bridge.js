// src/modules/canvas-music/bridge.js
import * as Engine from "./engine.js";

export function loadCanvasMusicModule() {
  const state = Engine.load();

  window.Portal.modules["canvas-music"] = {
    id: "canvas-music",
    name: "Canvas Music",
    state,
    update: Engine.update,
    reset: Engine.reset
  };

  return state;
}
