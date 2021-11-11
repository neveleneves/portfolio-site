import { takeLeading, put, call } from "redux-saga/effects";
import { activeLoader, disableLoader } from "../action/portfolioActions";
import { GET_PORTFOLIO } from "../type/portfolioTypes";

export function* portfolioSagaWatcher() {
  yield takeLeading(GET_PORTFOLIO, portfolioSagaWorker);
}

function* portfolioSagaWorker() {
  try {
    yield put(activeLoader());
    const payload = yield call(getPortfolioList);
    yield put({ type: GET_PORTFOLIO, payload });
    yield put(disableLoader());
  } catch (e) {
    console.error(e.message);
  }
}

const getPortfolioList = async () => {
  const response = await fetch(`/api/main/projects`, {
    method: "GET",
  });
  const portfolioList = await response.json();
  if (!response.ok) {
    throw new Error(
      portfolioList.message || "The request was executed incorrectly"
    );
  }
  return portfolioList;
};
