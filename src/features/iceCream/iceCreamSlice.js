import { ordered as cakeOrdered } from "../cake/cakeSlice";

const { cakeActions } = require("../cake/cakeSlice").default;

const createSlice = require("@reduxjs/toolkit").createSlice;
const initialState = {
  numOfIceCreams: 15,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    orderedIceCream: (state, action) => {
      return { ...state, numOfIcreams: state.numOfIceCreams - action.payload };
    },
    refilledIceCream: (state, action) => {
      return { ...state, numOfIcreams: state.numOfIceCreams + action.payload };
    },
  },
  /*extraReducers: {
    ["cake/ordered"]: (state, action) => {
      //return { ...state, numOfIceCreams: state.numOfIceCreams - 1 };
      state.numOfIceCreams--;
    },
  },*/
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered(), (state, action) => {
      state.numOfIceCreams--;
    });
  },
});

export default iceCreamSlice.reducer; //reducer exported as the default export
export const { orderedIceCream, refilledIceCream } = iceCreamSlice.actions; //actions exported as the named export
