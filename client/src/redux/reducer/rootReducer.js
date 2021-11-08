import { combineReducers } from "redux";
import { skillsReducer } from "./skillsReducer";

const appReducer = combineReducers({
    skills: skillsReducer
});

export const rootReducer = (state, action) => {
  switch (action.type) {
    // case LOGOUT:
    //   return appReducer({}, action);
    default:
      return appReducer(state, action);
  }
};
