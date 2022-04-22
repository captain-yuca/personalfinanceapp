export const getDeepProperty = (path, obj) =>
  path.split('.').reduce((prev, curr) => (prev ? prev[curr] : null), obj || null)
