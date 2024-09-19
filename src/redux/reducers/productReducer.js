import {
    FETCH_PRODUCT_DATA_REQUEST,
    FETCH_PRODUCT_DATA_SUCCESS,
    FETCH_PRODUCT_DATA_FAILURE,
  } from '../actions/productActions';
  
  const initialState = {};
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCT_DATA_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_PRODUCT_DATA_SUCCESS:
        return {
          ...state,
          productData: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_PRODUCT_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default productReducer;  