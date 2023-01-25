import { all } from "redux-saga/effects";
import { currentOrderWatcher } from "./curentOrderSaga";
import { orderListWatcher } from "./orderListSaga";

export default function* rootSaga() {
    yield all([
        orderListWatcher(),
        currentOrderWatcher(),
    ])
  }