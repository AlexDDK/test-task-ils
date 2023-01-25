import { SagaIterator } from "redux-saga";
import { takeEvery, call, put } from 'redux-saga/effects'
import { fetchingListError, fetchingListSuccess } from "../reducers/orderListSlice";
import { fetchToDataBase } from "../../HTTPS/fetchToDB";


function* orderListWorker(): SagaIterator {

    try {
        const data = yield call(fetchToDataBase)
        const orderList = yield call(() => new Promise(res => res(JSON.parse(data))))

        yield put(fetchingListSuccess(orderList.orders))

    }
    catch(error: any) {
        yield put(fetchingListError(error.message))

    }

}

export function* orderListWatcher() {
    yield takeEvery('orderList/fetchingList', orderListWorker)
}