// Turns a path in /public (e.g. '/images/demo.png') into a URL that works
// under the site's base path.
export const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '')
