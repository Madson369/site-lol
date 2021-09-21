const getDataReducer = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE":
      state = [action.payload];
      //console.log("aaa");
      //console.log(action.payload);
      return state;

    default:
      return state;
  }
};

export default getDataReducer;
