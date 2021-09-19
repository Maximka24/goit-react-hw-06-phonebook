import { combineReducers } from "redux";
import types from "./types";

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter((contact) => contact.id !== payload);

    default:
      return state;
  }
};

const filters = (state = "", { type, payload }) => {
  switch (type) {
    case types.FILTER_CONTACTS:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filters,
});
