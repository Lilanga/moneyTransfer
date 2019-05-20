import { all, fork, put, takeEvery } from "redux-saga/effects";

import {
    FETCH_USERS_REQUEST,
    POST_USERS_REQUEST,
    fetchUsersRequestSuccess,
    fetchUsersRequestFailed,
    postUsersRequestSuccess,
    postUsersRequestFailed
} from "./actions";

import fetch from 'isomorphic-unfetch';

function* handleFetchUsers() {
  try {
    let data = yield fetch('/api/users').then((res) => res.json())
    .catch((err)=>{
      throw err;
    });

    yield put(fetchUsersRequestSuccess(data));

  } catch (err) {
    yield put(fetchUsersRequestFailed(err));
  }
}

function* handlePostUser(user) {
  try {
    let data = yield fetch('/api/users', {
      method: 'post',
      body: user,
      headers: new Headers({
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      }),
    })
    .then((res) => res.json())
    .catch((err)=>{
      throw err;
    });

    yield put(postUsersRequestSuccess(data));
  } catch (err) {
    yield put(postUsersRequestFailed(err));
  }
}

function* watchFetchUsersRequest() {
  yield takeEvery(
    FETCH_USERS_REQUEST,
    handleFetchUsers,
  );
}

function* watchPostUserRequest() {
  yield takeEvery(
    POST_USERS_REQUEST,
    handlePostUser,
  );
}

export function* userSaga() {
  yield all([fork(watchFetchUsersRequest), fork(watchPostUserRequest)]);
}