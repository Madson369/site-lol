export const receive = (object) => {
  return {
    type: "RECEIVE",
    payload: object,
  };
};

export const clear = () => {
  return {
    type: "CLEAR",
  };
};
