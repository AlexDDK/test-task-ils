import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '../reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
    middleware: [sagaMiddleware]
    
})
sagaMiddleware.run(rootSaga)

export default store;   
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
