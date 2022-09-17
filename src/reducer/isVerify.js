const isVerify = (state = false, action) => {
  switch (action.type) {
    case "VERIFIED":
      return !state;
    default:
      return state;
  }
};

export default isVerify;
