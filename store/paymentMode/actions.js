export const FETCH_PAYMENTMODE_REQUEST = '@@FETCH_PAYMENTMODE_REQUEST';
export const FETCH_PAYMENTMODE_REQUEST_SUCCESS = '@@FETCH_PAYMENTMODE_REQUEST_SUCCESS';
export const FETCH_PAYMENTMODE_REQUEST_FAILED = '@@FETCH_PAYMENTMODE_REQUEST_FAILED';
export const POST_PAYMENTMODE_REQUEST = '@@POST_PAYMENTMODE_REQUEST';
export const POST_PAYMENTMODE_REQUEST_SUCCESS = '@@POST_PAYMENTMODE_REQUEST_SUCCESS';
export const POST_PAYMENTMODE_REQUEST_FAILED = '@@POST_PAYMENTMODE_REQUEST_FAILED';

export function fetchPaymentModeRequest() {
  return { type: FETCH_PAYMENTMODE_REQUEST };
}

export function fetchPaymentModeRequestSuccess(payload) {
  return { type: FETCH_PAYMENTMODE_REQUEST_SUCCESS, payload };
}

export function fetchPaymentModeRequestFailed(payload) {
  return { type: FETCH_PAYMENTMODE_REQUEST_FAILED, payload };
}

export function postPaymentModeRequest(payload) {
  return { type: POST_PAYMENTMODE_REQUEST, payload };
}

export function postPaymentModeRequestSuccess(payload) {
  return { type: POST_PAYMENTMODE_REQUEST_SUCCESS, payload };
}

export function postPaymentModeRequestFailed(payload) {
  return { type: POST_PAYMENTMODE_REQUEST_FAILED, payload };
}