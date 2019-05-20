export const FETCH_TRANSECTIONS_REQUEST = '@@FETCH_TRANSECTIONS_REQUEST';
export const FETCH_TRANSECTIONS_REQUEST_SUCCESS = '@@FETCH_TRANSECTIONS_REQUEST_SUCCESS';
export const FETCH_TRANSECTIONS_REQUEST_FAILED = '@@FETCH_TRANSECTIONS_REQUEST_FAILED';
export const POST_TRANSECTIONS_REQUEST = '@@POST_TRANSECTIONS_REQUEST';
export const POST_TRANSECTIONS_REQUEST_SUCCESS = '@@POST_TRANSECTIONS_REQUEST_SUCCESS';
export const POST_TRANSECTIONS_REQUEST_FAILED = '@@POST_TRANSECTIONS_REQUEST_FAILED';

export function fetchTransectionRequest() {
  return { type: FETCH_TRANSECTIONS_REQUEST };
}

export function fetchTransectionRequestSuccess(payload) {
  return { type: FETCH_TRANSECTIONS_REQUEST_SUCCESS, payload };
}

export function fetchTransectionRequestFailed(payload) {
  return { type: FETCH_TRANSECTIONS_REQUEST_FAILED, payload };
}

export function postTransectionRequest(payload) {
  return { type: POST_TRANSECTIONS_REQUEST, payload };
}

export function postTransectionRequestSuccess(payload) {
  return { type: POST_TRANSECTIONS_REQUEST_SUCCESS, payload };
}

export function postTransectionRequestFailed(payload) {
  return { type: POST_TRANSECTIONS_REQUEST_FAILED, payload };
}