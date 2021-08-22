import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Steps } from "./types";

type FormState = Record<string, any>;

const initialState: FormState = {
  consentFormAccepted: false,
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
    acceptAgreement(state) {
      state.consentFormAccepted = true;
    },
    resetAgreement(state) {
      state.consentFormAccepted = false;
    },

    setStepData(state, action) {
      const { key, stepData } = action.payload;
      state[key] = stepData;
    },
    resetStepData(state, action: PayloadAction<string>) {
      state[action.payload] = {};
    },

    resetSurvey() {
      return initialState;
    },
  },
});

export const {
  setStepData,
  resetStepData,
  acceptAgreement,
  resetAgreement,
  resetSurvey,
} = surveySlice.actions;
export const { reducer: surveyReducer } = surveySlice;
