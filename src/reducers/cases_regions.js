const initialState = {
  regions: [],
  loading: true,
  errorMessage: ''
}

const GET_REGIONS = 'GET_REGIONS'
const GET_SUCCESS = 'GET_SUCCESS'
const GET_REJECTED = 'GET_REJECTED'

const fetchData = (bool) => {
  return {
    type: GET_REGIONS,
    payload: bool,
  };
}

const fetchDataFulfilled = (data) => {
  return {
    type: GET_SUCCESS,
    payload: data,
    loading: false,
  };
}

const fetchDataRejected = (error) => {
  return {
    type: GET_REJECTED,
    payload: error,
    loading: false,
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REGIONS:
      return { ...state, loading: action.payload };
    case GET_SUCCESS:
      return { ...state, regions: action.payload, loading: action.loading };
    case GET_REJECTED:
      return { ...state, errorMessage: action.payload, loading: action.loading };
    default:
      return state
  }
}

export const get_regions = () => async (dispatch) => {
  try {
    const response = await fetch('http://192.168.43.23:3000/');
    dispatch(fetchData(true))

    const regions = await response.json()
    dispatch(fetchDataFulfilled(regions))

  } catch (error) {
    dispatch(fetchDataRejected(error))
  }
}