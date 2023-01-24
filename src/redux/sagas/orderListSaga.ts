import { SagaIterator } from "redux-saga";
import { takeEvery, call, put } from 'redux-saga/effects'
import { fetchingListError, fetchingListSuccess } from "../reducers/orderListSlice";
import { fetchToDataBase } from "./sagaHelpers";


function* fetchOrderListWorker(): SagaIterator {
  console.log('sss');
  try {
    const data = yield call(fetchToDataBase)
    const orderList = yield call(() => new Promise(res => {
      console.log(data);
      return res(JSON.parse(data))
    }))

    yield put(fetchingListSuccess(orderList.orders))

  }
  catch(error: any) {
    yield put(fetchingListError(error.message))
  }
}

export function* FetchOrderListWatcher() {
  yield takeEvery('orderList/fetchingList', fetchOrderListWorker)
}