import { SagaIterator } from "redux-saga";
import { put, takeLatest } from "redux-saga/effects";
import { orderError, setOrder } from "../reducers/currentOrderSlice";
import { IOrder } from "../reducers/sliceTypes";

type action = {
    type: string, 
    payload: IOrder
}


function* currentListWorker(args: action): SagaIterator {

    try {
        yield put(setOrder(args.payload))

    } catch (error: any) {
        yield put(orderError(error.message))
        
    }

}

export function* currentOrderWatcher() {
    yield takeLatest("currentOrder/chooseOrder", currentListWorker)

}