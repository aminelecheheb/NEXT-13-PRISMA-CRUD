import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GlobalState = {
  activeNav: string;
};

const initialState = {
  activeNav: "",
} as GlobalState;

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setActiveNav: (state, action: PayloadAction<string>) => {
      state.activeNav = action.payload;
    },
  },
});

export const { setActiveNav } = globalSlice.actions;
export default globalSlice.reducer;
