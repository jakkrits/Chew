/* eslint-disable no-restricted-syntax */
/* eslint-disable */
export default () => {};

export function dump(obj) {
  let out = '';
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      out += `${key}: ${obj[key]}\n`;
    }
  }

  return out;
}

export function mergeObjects(...args) {
  const dst = {};
  let src;
  let p;
  const aargs = [].splice.call(args, 0);

  while (aargs.length > 0) {
    src = aargs.splice(0, 1)[0];
    if (toString.call(src) === '[object Object]') {
      for (p in src) {
        if (Object.prototype.hasOwnProperty.call(src, p)) {
          if (toString.call(src[p]) === '[object Object]') {
            dst[p] = mergeObjects(dst[p] || {}, src[p]);
          } else {
            dst[p] = src[p];
          }
        }
      }
    }
  }

  return dst;
}

/* eslint-enable no-restricted-syntax */
