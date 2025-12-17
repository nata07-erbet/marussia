import { createReducer } from "@reduxjs/toolkit";
import { VALUE_FOR_ACTION } from "../const/const";

import { inc, dec, setValue } from "./actions";

const initialState = {
  count: 0,
};

const appReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(inc, (state) => {
      state.count += 1;
    })
    .addCase(dec, (state) => {
      state.count -= 1;
    })
    .addCase(setValue, (state, action) => {
      state.count = action.payload;
    }),
);

export { appReducer };
