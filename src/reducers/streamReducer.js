// import _ from "lodash";

import { types } from "../types/types";

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_STREAMS:
      return { ...state, ...Object.assign({}, action.payload) };

    case types.FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case types.CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case types.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case types.DELETE_STREAM:
      return {
        ...state,
        ...state.streams.filter((stream) => stream.id !== action.payload.id),
      };

    default:
      return state;
  }
};
