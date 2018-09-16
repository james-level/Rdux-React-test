export const instrumentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_INSTRUMENT_SUCCESS':
        return [
          ...state,
          Object.assign({}, action.instrument)
        ];
    case 'FETCH_INSTRUMENTS_SUCCESS':
          return action.instruments;
    default:
          return state;
  }
};

export const instrumentReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_INSTRUMENT_BY_ID_SUCCESS':
      return action.instrument;
    default:
      return state;
  }
};
