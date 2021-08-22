import { combineReducers } from "@reduxjs/toolkit";
import { stepperReducer } from "../pages/Survey/Stepper/stepperSlice";
import { surveyReducer } from "../pages/Survey/surveySlice";
import { agreementReducer } from "../pages/Home/agreementSlice";

export const applicationReducer = combineReducers({
  stepper: stepperReducer,
  survey: surveyReducer,
  agreement: agreementReducer,
});

export type AppState = ReturnType<typeof applicationReducer>;
