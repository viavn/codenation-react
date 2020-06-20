const { createStore } = require('redux');

// ACTIONS
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Inital state
const INITIAL_STATE = {
  counter: 0,
};

// Reducer
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };

    default:
      return state;
  }
}

// Create the store
const store = createStore(reducer);

// Add a listener
store.subscribe(() => {
  console.log(`store: ${store.getState().counter}`);
});

// dispatchers
store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
