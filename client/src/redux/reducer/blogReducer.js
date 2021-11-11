import { GET_POSTS, LOADER_HIDE, LOADER_SHOW } from "../type/blogTypes.js";

const initState = {
  blogList: [],
  loadingBlog: false,
};

export const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, blogList: action.payload };
    case LOADER_SHOW:
      return { ...state, loadingBlog: true };
    case LOADER_HIDE:
      return { ...state, loadingBlog: false };
    default:
      return state;
  }
};
