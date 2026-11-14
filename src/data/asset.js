// Turns a path in /public (e.g. '/images/demo.png') into a URL that works
// under the site's base path. Full URLs are returned unchanged.
export const asset = (path) =>
  /^https?:\/\//.test(path) ? path : import.meta.env.BASE_URL + path.replace(/^\//, '')
