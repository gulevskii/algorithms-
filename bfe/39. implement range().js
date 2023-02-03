
/**
 * @param {integer} from
 * @param {integer} to
 */
function range(from, to) {
  return new Array(to-from+1).fill().map((_,i) => i+from)
}