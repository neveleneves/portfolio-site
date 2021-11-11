import { combineReducers } from "redux";

import { skillsReducer } from "./skillsReducer";
import { portfolioReducer } from "./portfolioReducer";
import { blogReducer } from "./blogReducer";

const appReducer = combineReducers({
  skills: skillsReducer,
  portfolio: portfolioReducer,
  blog: blogReducer,
});

export const rootReducer = (state, action) => {
  switch (action.type) {
    // case LOGOUT:
    //   return appReducer({}, action);
    default:
      return appReducer(state, action);
  }
};
