import { 
  FETCH_TRANSECTIONS_REQUEST,
  FETCH_TRANSECTIONS_REQUEST_FAILED,
  FETCH_TRANSECTIONS_REQUEST_SUCCESS,
  POST_TRANSECTIONS_REQUEST,
  POST_TRANSECTIONS_REQUEST_FAILED,
  POST_TRANSECTIONS_REQUEST_SUCCESS
 } from './actions';

const INITIAL_STATE = { loadError: null, saveError: null, transections: [], isLoading: false, isSaving: false };

export function transectionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TRANSECTIONS_REQUEST:
      return { ...state, loadError: null, isLoading: true };
    case FETCH_TRANSECTIONS_REQUEST_FAILED:
      return { ...state, loadError: action.payload, isLoading: false, transections: [] };
    case FETCH_TRANSECTIONS_REQUEST_SUCCESS:
      return { ...state, loadError: null, isLoading: false, transections: action.payload, };
    case POST_TRANSECTIONS_REQUEST:
      return { ...state, isSaving: true, saveError: null };
    case POST_TRANSECTIONS_REQUEST_FAILED:
      return { ...state, saveError: action.payload, isSaving: false };
    case POST_TRANSECTIONS_REQUEST_SUCCESS:
      return { ...state, isSaving: false, saveError: null, };
    default:
      return state;
  }
}