import * as actionTypes from './actionTypes';
import Axios from 'axios';

const apiUrl = 'http://57c64baac1fc8711008f2a82.mockapi.io/book';

// export const createInstrument = (Instrument) => {
//   return {
//     type: actionTypes.CREATE_Instrument,
//     Instrument
//   }
// };

export const fetchInstrumentsSuccess = (instruments) => {
  return {
    type: actionTypes.FETCH_INSTRUMENTS_SUCCESS,
    instruments
  }
};

export const createInstrumentSuccess = (instrument) => {
  return {
    type: actionTypes.CREATE_INSTRUMENT_SUCCESS,
    instrument
  }
};

export const fetchInstrumentByIdSuccess = (instrument) => {
  return {
    type: actionTypes.FETCH_INSTRUMENT_BY_ID_SUCCESS,
    instrument
  }
};

export const fetchInstruments = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(fetchInstrumentsSuccess(response.data))
        console.log(response.data);
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createInstrument = (instrument) => {
  return (dispatch) => {
    return Axios.post(apiUrl, instrument)
      .then(response => {
        dispatch(createInstrumentSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchInstrumentById = (instrumentId) => {
  return (dispatch) => {
    return Axios.get(apiUrl + '/' +instrumentId)
      .then(response => {

        dispatch(fetchInstrumentByIdSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const addToCartSuccess = (item) => {
  return {
    type: actionTypes.ADD_TO_CART_SUCCESS,
    item
  }
};

export const addToCart = (item) => {
  return (dispatch) => {
    return Axios.post('http://57c64baac1fc8711008f2a82.mockapi.io/Cart', item)
      .then(response => {
        dispatch(addToCartSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchCartSuccess = (items) => {
  return {
    type: actionTypes.FETCH_CART_SUCCESS,
    items
  }
};

export const fetchCart = () => {
  return (dispatch) => {
    return Axios.get('http://57c64baac1fc8711008f2a82.mockapi.io/Cart')
      .then(response => {
        dispatch(fetchCartSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
