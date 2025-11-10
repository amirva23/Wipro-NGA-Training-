import EventEmitter from "eventemitter3";

class Dispatcher extends EventEmitter {
  dispatch(action) {
    this.emit("dispatch", action);
  }

  register(callback) {
    this.on("dispatch", callback);
  }
}

const dispatcher = new Dispatcher();
export default dispatcher;
