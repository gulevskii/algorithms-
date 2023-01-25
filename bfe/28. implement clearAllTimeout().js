// First solution
// This will clear all setInterval timers as well because they share 
// the same id pool as setTimeout.
function clearAllTimeout() {
  let timeout = setTimeout(() => null, 0)
  while (timeout > 0) {
    clearTimeout(timeout)
    timeout--
  }
}

// Second solution
const originalSetTimeout = window.setTimeout;
let timeoutIds = new Set();

window.setTimeout = (callback, delay) => {
    const timerId = originalSetTimeout(callback, delay)
    timeoutIds.add(timerId);
    return timerId
}

const clearAllTimeout = () => {
    timeoutIds.forEach(id => window.clearTimeout(id))
}