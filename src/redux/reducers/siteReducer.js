import {
    FETCH_SITE_DATA_REQUEST,
    FETCH_SITE_DATA_SUCCESS,
    FETCH_SITE_DATA_FAILURE,
  } from '../actions/siteActions';
  
  const initialState = {};
  
  const siteReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SITE_DATA_REQUEST:
        return {
          ...state,
        };
      case FETCH_SITE_DATA_SUCCESS:        
        return {
          ...state,
          siteData: action.payload,
        };
      case FETCH_SITE_DATA_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default siteReducer