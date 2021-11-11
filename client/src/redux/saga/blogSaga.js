import { takeLeading, put, call } from "redux-saga/effects";
import { activeLoader, disableLoader } from "../action/blogActions";
import { GET_POSTS } from "../type/blogTypes";

export function* blogSagaWatcher() {
  yield takeLeading(GET_POSTS, blogSagaWorker);
}

function* blogSagaWorker() {
  try {
    yield put(activeLoader());
    const payload = yield call(getBlogList);
    yield put({ type: GET_POSTS, payload });
    yield put(disableLoader());
  } catch (e) {
    console.error(e.message);
  }
}

const getBlogList = async () => {
  const response = await fetch(`/api/main/posts`, {
    method: "GET",
  });
  const blogList = await response.json();
  if (!response.ok) {
    throw new Error(blogList.message || "The request was executed incorrectly");
  }
  return blogList;
};
