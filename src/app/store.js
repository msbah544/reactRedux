import { configureStore } from "@reduxjs/toolkit";
//import { getDefaultMiddleware } from "@reduxjs/toolkit";
//import { createLogger as _createLogger } from "redux-logger";

//const logger = _createLogger();

import cakeReducer from "../features/cake/cakeSlice";

import iceCreamReducer from "../features/iceCream/iceCreamSlice";

import userReducer from "../features/users/userSlice";

//import userReducer2 from "../features/users/userSlice2";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
    //user2: userReducer2,
  },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
