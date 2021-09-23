const defRegionReducer = (state = 'br1', action) => {
    switch (action.type) {
      case "DEFINE":
        state = action.payload
     
      default:
        return state;
    }
  };
  
  export default defRegionReducer;
  