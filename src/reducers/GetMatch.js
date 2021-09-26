const getMatchReducer = (state = [], action) => {
  switch (action.type) {
    case "COLLECT":
      state = [...state, action.payload];

      return state;

    case "WIPE":
      return [];

    default:
      return state;
  }
};

export default getMatchReducer;
