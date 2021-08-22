import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Steps } from "./types";

type FormState = Record<string, object>;

const initialState: FormState = {
  [Steps.PROFESSIONAL]: {},
  [Steps.PERCEPTION]: {},
  [Steps.MATURITY]: {},
  [Steps.CULTURE]: {},
  [Steps.BENEFITS]: {},
  [Steps.CHALLENGES]: {},
};

const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    setStepData(state, action) {
      const { key, stepData } = action.payload;
      state[key] = stepData;
    },
    resetStepData(state, action: PayloadAction<string>) {
      state[action.payload] = {};
    },
  },
});

export const { setStepData, resetStepData } = surveySlice.actions;
export const { reducer: surveyReducer } = surveySlice;
