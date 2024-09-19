import axios from 'axios';

export const FETCH_SITE_DATA_REQUEST = 'FETCH_SITE_DATA_REQUEST';
export const FETCH_SITE_DATA_SUCCESS = 'FETCH_SITE_DATA_SUCCESS';
export const FETCH_SITE_DATA_FAILURE = 'FETCH_SITE_DATA_FAILURE';

export const fetchSiteData = () => {
  
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_SITE_DATA_REQUEST });

      const response = await axios.get('https://run.mocky.io/v3/6b18ed5b-9b7a-4a03-97a8-f1ce7d7994e8');
      
      dispatch({
        type: FETCH_SITE_DATA_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      
      dispatch({
        type: FETCH_SITE_DATA_FAILURE,
        payload: error.message,
      });
    }
  };
};
