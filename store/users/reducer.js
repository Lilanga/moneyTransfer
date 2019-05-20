import { 
    FETCH_USERS_REQUEST,
    FETCH_USERS_REQUEST_FAILED,
    FETCH_USERS_REQUEST_SUCCESS,
    POST_USERS_REQUEST,
    POST_USERS_REQUEST_FAILED,
    POST_USERS_REQUEST_SUCCESS,
   } from './actions';
  
  const INITIAL_STATE = { loadError: null, saveError: null, users: [], isLoading: false, isSaving: false };
  
  export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return { ...state, loadError: null, isLoading: true };
      case FETCH_USERS_REQUEST_FAILED:
        return { ...state, loadError: action.payload, isLoading: false, users: [] };
      case FETCH_USERS_REQUEST_SUCCESS:
        return { ...state, loadError: null, isLoading: false, users: action.payload, };
      case POST_USERS_REQUEST:
        return { ...state, isSaving: true, saveError: null };
      case POST_USERS_REQUEST_FAILED:
        return { ...state, saveError: action.payload, isSaving: false };
      case POST_USERS_REQUEST_SUCCESS:
        return { ...state, isSaving: false, saveError: null, users: [...state.users, action.payload], };
      default:
        return state;
    }
  }