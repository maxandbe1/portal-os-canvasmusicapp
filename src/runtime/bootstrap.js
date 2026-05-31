// src/runtime/bootstrap.js
import { loadIdentityModule } from "../modules/identity/bridge.js";
import { loadMemoryModule } from "../modules/memory/bridge.js";
import { loadConsoleModule } from "../modules/console/bridge.js";
import { loadDashboardModule } from "../modules/dashboard/bridge.js";
import { loadSoundModule } from "../modules/sound/bridge.js";
import { loadCanvasMusicModule } from "../modules/canvas-music/bridge.js";

if (!window.Portal) window.Portal = {};
if (!window.Portal.modules) window.Portal.modules = {};

export function bootstrapPortal() {
  console.log("%cPortal MVV Booting…", "color:#0ff;font-weight:bold;");

  loadIdentityModule();
  loadMemoryModule();
  loadConsoleModule();
  loadDashboardModule();
  loadSoundModule();
  loadCanvasMusicModule();

  console.log("%cPortal MVV Ready", "color:#0f0;font-weight:bold;");
}
