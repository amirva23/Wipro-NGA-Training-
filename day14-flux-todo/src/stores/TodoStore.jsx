import EventEmitter from "eventemitter3";
import dispatcher from "../dispatcher/Dispatcher.jsx";

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [];
    dispatcher.register(this.handleActions.bind(this)); // listen to actions
  }

  handleActions(action) {
    if (action.type === "ADD_TODO") {
      this.todos.push(action.payload); // add todo
      this.emit("change");             // notify React components
    }
  }

  getTodos() {
    return this.todos;
  }
}

export default new TodoStore();
