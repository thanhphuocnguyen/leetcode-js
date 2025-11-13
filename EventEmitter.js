class EventEmitter {
  evtMap = {};
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (this.evtMap[eventName]) {
      this.evtMap[eventName].push(callback);
    } else {
      this.evtMap[eventName] = [callback];
    }
    const idx = this.evtMap[eventName].length - 1;
    return {
      unsubscribe: () => {
        this.evtMap[eventName][idx] = undefined;
        return undefined;
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.evtMap[eventName]) {
      return [];
    }
    this.evtMap[eventName] = this.evtMap[eventName].filter(Boolean);
    return this.evtMap[eventName].map((cb) => cb(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

const evtEmitter = new EventEmitter();

// evtEmitter.emit('firstEvent');
const f1 = evtEmitter.subscribe('firstEvent', (x) => x + 1);
const f2 = evtEmitter.subscribe('firstEvent', (x) => x + 2);
const f3 = evtEmitter.subscribe('firstEvent', (x) => x + 3);
f2.unsubscribe();
f3.unsubscribe();
console.log(evtEmitter.emit('firstEvent', [5]));
