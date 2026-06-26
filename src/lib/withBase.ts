// Join a root-absolute path onto the configured deploy base, normalising
// slashes so it works whether import.meta.env.BASE_URL ends with "/" or not
// (Astro resolves BASE_URL inconsistently across environments).
const RAW = import.meta.env.BASE_URL;
const BASE = RAW.endsWith('/') ? RAW.slice(0, -1) : RAW;

export function withBase(path = '/') {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${p}`;
}
