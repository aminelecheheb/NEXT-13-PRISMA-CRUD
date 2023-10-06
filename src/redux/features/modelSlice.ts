import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModelState = {
  isOpen: boolean;
};

const initialState = {
  isOpen: false,
} as ModelState;

export const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    closeModel: (state) => {
      state.isOpen = false;
    },
    openModel: (state) => {
      state.isOpen = true;
    },
    // setByPayload: (state, action: PayloadAction<boolean>) => {
    //   state.isOpen = action.payload;
    // },
  },
});

export const { openModel, closeModel } = modelSlice.actions;
export default modelSlice.reducer;
