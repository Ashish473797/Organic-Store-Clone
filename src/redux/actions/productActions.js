import axios from 'axios';

export const FETCH_PRODUCT_DATA_REQUEST = 'FETCH_PRODUCT_DATA_REQUEST';
export const FETCH_PRODUCT_DATA_SUCCESS = 'FETCH_PRODUCT_DATA_SUCCESS';
export const FETCH_PRODUCT_DATA_FAILURE = 'FETCH_PRODUCT_DATA_FAILURE';

export const fetchProductData = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_PRODUCT_DATA_REQUEST });

      const response = await axios.get('https://run.mocky.io/v3/c9ff4734-4dd3-4e35-9e61-aa1027b8622e');
      
      dispatch({
        type: FETCH_PRODUCT_DATA_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCT_DATA_FAILURE,
        payload: error.message,
      });
    }
  };
};
