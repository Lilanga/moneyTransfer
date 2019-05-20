import {transectionReducer, transectionSaga} from "./transection";
import {paymentModeReducer, paymentModeSaga} from "./paymentMode"
import {userReducer, userSaga} from "./users";
import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";

export const rootReducer = combineReducers({
    transections: transectionReducer,
    users: userReducer,
    paymentModes: paymentModeReducer
});

export function* rootSaga() {
    yield all([fork(transectionSaga), fork(userSaga), fork(paymentModeSaga)]);
}