import { all, fork, put, takeEvery } from "redux-saga/effects";

import {
    FETCH_PAYMENTMODE_REQUEST,
    POST_PAYMENTMODE_REQUEST,
    fetchPaymentModeRequestSuccess,
    fetchPaymentModeRequestFailed,
    postPaymentModeRequestSuccess,
    postPaymentModeRequestFailed
} from "./actions";

import fetch from 'isomorphic-unfetch';

function* handleFetchPaymentMode() {
  try {
    let data = yield fetch('/api/paymentmodes').then((res) => res.json())
    .catch((err)=>{
      throw err;
    });

    yield put(fetchPaymentModeRequestSuccess(data));

  } catch (err) {
    yield put(fetchPaymentModeRequestFailed(err));
  }
}

function* handlePostPaymentMode(paymentmode) {
  try {
    let data = yield fetch('/api/paymentmodes', {
      method: 'post',
      body: paymentmode,
      headers: new Headers({
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      }),
    })
    .then((res) => res.json())
    .catch((err)=>{
      throw err;
    });

    yield put(postPaymentModeRequestSuccess(data));
  } catch (err) {
    yield put(postPaymentModeRequestFailed(err));
  }
}

function* watchFetchPaymentModeRequest() {
  yield takeEvery(
    FETCH_PAYMENTMODE_REQUEST,
    handleFetchPaymentMode,
  );
}

function* watchPostPaymentModeRequest() {
  yield takeEvery(
    POST_PAYMENTMODE_REQUEST,
    handlePostPaymentMode,
  );
}

export function* paymentModeSaga() {
  yield all([fork(watchFetchPaymentModeRequest), fork(watchPostPaymentModeRequest)]);
}