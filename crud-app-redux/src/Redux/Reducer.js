let initialState = {
  test: "Hello world !",
  count: 0,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "saifMomin/test":
      return { ...state, test: action.payload };
    case "count/increment":
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

export default myReducer;
