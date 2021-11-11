import { GET_POSTS, LOADER_HIDE, LOADER_SHOW } from "../type/blogTypes";

export function getBlogList(projects) {
  return {
    type: GET_POSTS,
    payload: projects,
  };
}

export function activeLoader(toggle) {
  return {
    type: LOADER_SHOW,
    payload: toggle,
  };
}

export function disableLoader(toggle) {
  return {
    type: LOADER_HIDE,
    payload: toggle,
  };
}
