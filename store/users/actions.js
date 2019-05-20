export const FETCH_USERS_REQUEST = '@@FETCH_USERS_REQUEST';
export const FETCH_USERS_REQUEST_SUCCESS = '@@FETCH_USERS_REQUEST_SUCCESS';
export const FETCH_USERS_REQUEST_FAILED = '@@FETCH_USERS_REQUEST_FAILED';
export const POST_USERS_REQUEST = '@@POST_USERS_REQUEST';
export const POST_USERS_REQUEST_SUCCESS = '@@POST_USERS_REQUEST_SUCCESS';
export const POST_USERS_REQUEST_FAILED = '@@POST_USERS_REQUEST_FAILED';

export function fetchUsersRequest() {
  return { type: FETCH_USERS_REQUEST };
}

export function fetchUsersRequestSuccess(payload) {
  return { type: FETCH_USERS_REQUEST_SUCCESS, payload };
}

export function fetchUsersRequestFailed(payload) {
  return { type: FETCH_USERS_REQUEST_FAILED, payload };
}

export function postUsersRequest(payload) {
  return { type: POST_USERS_REQUEST, payload };
}

export function postUsersRequestSuccess(payload) {
  return { type: POST_USERS_REQUEST_SUCCESS, payload };
}

export function postUsersRequestFailed(payload) {
  return { type: POST_USERS_REQUEST_FAILED, payload };
}