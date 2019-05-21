import { all, fork, put, takeEvery } from "redux-saga/effects";

import {
  FETCH_TRANSECTIONS_REQUEST,
  fetchTransectionRequest,
  POST_TRANSECTIONS_REQUEST,
  fetchTransectionRequestFailed, 
  fetchTransectionRequestSuccess, 
  postTransectionRequestFailed, 
  postTransectionRequestSuccess, 
  fetchTransactionSummaryRequestSuccess,
  fetchTransactionSummaryRequestFailed,
  FETCH_TRANSACTIONS_SUMMARY_REQUEST,
  fetchTransactionSummaryRequest
} from "./actions";
import fetch from 'isomorphic-unfetch';

function* handleFetchTransections() {
  try {
    let data = yield fetch('/api/transections').then((res) => res.json())
    .catch((err)=>{
      throw err;
    });

    yield put(fetchTransectionRequestSuccess(data));

  } catch (err) {
    yield put(fetchTransectionRequestFailed(err));
  }
}

function* handleFetchTransactionSummary() {
  try {
    let data = yield fetch('/api/transections/summary').then((res) => res.json())
    .catch((err)=>{
      throw err;
    });

    yield put(fetchTransactionSummaryRequestSuccess(data));

  } catch (err) {
    yield put(fetchTransactionSummaryRequestFailed(err));
  }
}

function* handlePostTransection(action) {
  try {
    let data = yield fetch('/api/transections', {
      method: 'post',
      body: JSON.stringify(action.payload),
      headers: new Headers({
        'content-type': 'application/json; charset=utf-8'
      }),
    })
    .then((res) => res.json())
    .catch((err)=>{
      throw err;
    });

    yield put(postTransectionRequestSuccess(data));
    yield put(fetchTransectionRequest());
    yield put(fetchTransactionSummaryRequest());
  } catch (err) {
    yield put(postTransectionRequestFailed(err));
  }
}

function* watchFetchTransectionsRequest() {
  yield takeEvery(
    FETCH_TRANSECTIONS_REQUEST,
    handleFetchTransections,
  );
}

function* watchFetchTransactionsSummaryRequest() {
  yield takeEvery(
    FETCH_TRANSACTIONS_SUMMARY_REQUEST,
    handleFetchTransactionSummary,
  );
}

function* watchPostTransectionRequest() {
  yield takeEvery(
    POST_TRANSECTIONS_REQUEST,
    handlePostTransection,
  );
}

export function* transectionSaga() {
  yield all([fork(watchPostTransectionRequest), fork(watchFetchTransectionsRequest), fork(watchFetchTransactionsSummaryRequest)]);
}