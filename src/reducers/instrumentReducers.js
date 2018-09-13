export default (state = [], action) => {
  switch (action.type) {

    case 'CREATE_INSTRUMENT':
      return [
        ...state,
        Object.assign({}, action.book)
      ];
      default:
              return state;
  }
};
