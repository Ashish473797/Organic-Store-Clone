import axios from 'axios';

export const FETCH_PRODUCT_DATA_REQUEST = 'FETCH_PRODUCT_DATA_REQUEST';
export const FETCH_PRODUCT_DATA_SUCCESS = 'FETCH_PRODUCT_DATA_SUCCESS';
export const FETCH_PRODUCT_DATA_FAILURE = 'FETCH_PRODUCT_DATA_FAILURE';

export const fetchProductData = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_PRODUCT_DATA_REQUEST });

      const response = await axios.get('https://run.mocky.io/v3/9297301c-741d-44bc-ac12-b771dbab2634');
      
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
