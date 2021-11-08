import { takeLeading, put, call } from "redux-saga/effects";
import { activeLoader, disableLoader } from "../action/skillsActions";
import { GET_SKILLS } from "../type/skillsTypes";

export function* skillsSagaWatcher() {
  yield takeLeading(GET_SKILLS, skillsSagaWorker);
}

function* skillsSagaWorker() {
  try {
    yield put(activeLoader());
    const payload = yield call(getSkillsList);
    yield put({ type: GET_SKILLS, payload });
    yield put(disableLoader());
  } catch (e) {
    console.error(e.message);
  }
}

const getSkillsList = async () => {
  const response = await fetch(`/api/main/skills`, {
    method: "GET",
  });
  const skillsList = await response.json();
  if (!response.ok) {
    throw new Error(
      skillsList.message || "The request was executed incorrectly"
    );
  }
  return skillsList;
};
