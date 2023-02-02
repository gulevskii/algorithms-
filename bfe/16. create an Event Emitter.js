// // please complete the implementation
class EventEmitter {
  constructor() {
    this.events = new Map()
  }
  
  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Set())
    }

    const fn = {callback}
    this.events.get(eventName).add(fn)

    return {
      release: () => {
        this.events.get(eventName).delete(fn)
      }
    }
  }
  
  emit(eventName, ...args) {
    if (!this.events.has(eventName)) {
      return 
    }
    this.events.get(eventName).forEach(({callback}) => callback.call(this, ...args))
  }
}