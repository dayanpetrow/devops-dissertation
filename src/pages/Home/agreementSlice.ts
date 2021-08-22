import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const agreementSlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    acceptAgreement(state) {
      return true;
    },
    resetAgreement(state) {
      return false;
    },
  },
});

export const { acceptAgreement, resetAgreement } = agreementSlice.actions;
export const { reducer: agreementReducer } = agreementSlice;
