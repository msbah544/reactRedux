import { createSlice } from "@reduxjs/toolkit";

//create initial state
const initialState = {
  numOfCakes: 10,
};

//create cakeSlice
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      return { ...state, numOfCakes: state.numOfCakes - action.payload };
    },
    refilled: (state = initialState, action) => {
      return { ...state, numOfCakes: state.numOfCakes + action.payload };
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, refilled } = cakeSlice.actions;
