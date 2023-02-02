
/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  return {
    css: function(key, value) {
      if (key) {
        el.style[key] = value
      }
      return this
    }
  }
}