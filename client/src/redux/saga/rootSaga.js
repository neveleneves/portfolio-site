import { all } from "@redux-saga/core/effects";
import { skillsSagaWatcher } from "./skillsSaga";

export function* rootSaga() {
  yield all([skillsSagaWatcher()]);
}
