import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.MMF4pVnv.js","_app/immutable/chunks/index.oiCz_B55.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.u44qVECu.js","_app/immutable/chunks/index.fT9pQYMY.js","_app/immutable/chunks/singletons.k00UwdgG.js","_app/immutable/chunks/each.-oqiv04n.js","_app/immutable/chunks/config.Jl7_C1bR.js"];
export const stylesheets = [];
export const fonts = [];
