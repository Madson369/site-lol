export const collect = (object) => {
    return {
      type: "COLLECT",
      payload: object,
    };
  };
  
  export const wipe = () => {
    return {
      type: "WIPE",
    };
  };
  