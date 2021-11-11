import { all } from "@redux-saga/core/effects";
import { blogSagaWatcher } from "./blogSaga";
import { portfolioSagaWatcher } from "./portfolioSaga";
import { skillsSagaWatcher } from "./skillsSaga";

export function* rootSaga() {
  yield all([skillsSagaWatcher(), portfolioSagaWatcher(), blogSagaWatcher()]);
}
