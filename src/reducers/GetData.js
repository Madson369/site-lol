const getDataReducer = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE":
      state = [...state, action.payload];
      //console.log("aaa");
      //console.log(action.payload);
      return state;

    case "CLEAR":
      return [];

    default:
      return state;
  }
};

export default getDataReducer;
