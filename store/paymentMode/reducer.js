import { 
    FETCH_PAYMENTMODE_REQUEST,
    FETCH_PAYMENTMODE_REQUEST_FAILED,
    FETCH_PAYMENTMODE_REQUEST_SUCCESS,
    POST_PAYMENTMODE_REQUEST,
    POST_PAYMENTMODE_REQUEST_FAILED,
    POST_PAYMENTMODE_REQUEST_SUCCESS,
   } from './actions';
  
  const INITIAL_STATE = { loadError: null, saveError: null, modes: [], isLoading: false, isSaving: false };
  
  export function paymentModeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case FETCH_PAYMENTMODE_REQUEST:
        return { ...state, loadError: null, isLoading: true };
      case FETCH_PAYMENTMODE_REQUEST_FAILED:
        return { ...state, loadError: action.payload, isLoading: false, modes: [] };
      case FETCH_PAYMENTMODE_REQUEST_SUCCESS:
        return { ...state, loadError: null, isLoading: false, modes: action.payload, };
      case POST_PAYMENTMODE_REQUEST:
        return { ...state, isSaving: true, saveError: null };
      case POST_PAYMENTMODE_REQUEST_FAILED:
        return { ...state, saveError: action.payload, isSaving: false };
      case POST_PAYMENTMODE_REQUEST_SUCCESS:
        return { ...state, isSaving: false, saveError: null, modes: [...state.modes, action.payload], };
      default:
        return state;
    }
  }