import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.-yfWIlYG.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/index.oiCz_B55.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.u44qVECu.js","_app/immutable/chunks/index.fT9pQYMY.js","_app/immutable/chunks/each.-oqiv04n.js","_app/immutable/chunks/config.Jl7_C1bR.js"];
export const stylesheets = ["_app/immutable/assets/2.RO_etTy8.css"];
export const fonts = [];
