import { getData } from './fake-api';

// ACTIONS
const FETCH = 'HOME_WITH_REDUX/FETCH';

const INITIAL_STATE = {
  data: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        data: [...state.data, ...action.payload],
      };
    default:
      return state;
  }
}

// ACTION creators
export function fetch() {
  return async (dispatch) => {
    const data = await getData();

    dispatch({
      type: FETCH,
      payload: data,
    });
  };
  // return {
  //   type: FETCH,
  //   payload: [],
  // };
}
