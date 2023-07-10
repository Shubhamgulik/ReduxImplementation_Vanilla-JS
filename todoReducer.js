// Action Creators

const addTodo = (text) => ({
  type: "ADD_TODO",
  text,
});

const toggle = (index) => ({
  type: "TOGGLE_TODO",
  index,
});

// Reducer

const initialState = {
  todos: [],
};

function todoReducer(state = initialState, action) {
  console.log(action.text);
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { task: action.text, completed: false }],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i === action.index) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}

// Store
const redux = require("redux");
const store = redux.createStore(todoReducer);

// dispatcher

store.dispatch(addTodo("Go to gym"));
store.dispatch(addTodo("Go to work"));
store.dispatch(toggle(1));
console.log(store.getState());
