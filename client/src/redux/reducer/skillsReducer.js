import { GET_SKILLS, LOADER_HIDE, LOADER_SHOW } from "../type/skillsTypes";

const initState = {
  usingSkills: [],
  learningSkills: [],
  loadingSkills: false,
};

export const skillsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_SKILLS:
      return {
        ...state,
        usingSkills: action.payload?.filter(
          (item) => item.type === "using_stack"
        ),
        learningSkills: action.payload?.filter(
          (item) => item.type === "learning_stack"
        ),
      };
    case LOADER_SHOW:
      return { ...state, loadingSkills: true };
    case LOADER_HIDE:
      return { ...state, loadingSkills: false };
    default:
      return state;
  }
};
