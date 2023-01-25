import { SagaIterator } from "redux-saga";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { osrmApi } from "../../HTTPS/osrmApi";
import { orderError, setOrder, setPolyline } from "../reducers/currentOrderSlice";
import { IOrder } from "../reducers/sliceTypes";

type action = {
    type: string, 
    payload: IOrder
}


function* currentListWorker(args: action): SagaIterator {

    try {
        yield delay(100)
        const dataFromApi = yield call(osrmApi,`${args.payload.from.lng},${args.payload.from.lat};${args.payload.to.lng},${args.payload.to.lat}`)
        const jsonFromApi = yield call(() => new Promise(res => res(dataFromApi.json())))
        yield put(setOrder(args.payload)) 
        yield put(setPolyline(jsonFromApi.routes[0].geometry.coordinates.map((el: number[]) => el.reverse())))

    } catch (error: any) {
        yield put(orderError(error.message))
        
    }

}

export function* currentOrderWatcher() {
    yield takeLatest("currentOrder/chooseOrder", currentListWorker)

}