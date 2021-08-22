import { combineReducers } from "@reduxjs/toolkit";
import { stepperReducer } from "../pages/Survey/Stepper/stepperSlice";
import { surveyReducer } from "../pages/Survey/surveySlice";
import { saveSurveyReducer } from "../pages/Survey/submitSurveySlice";

export const applicationReducer = combineReducers({
  stepper: stepperReducer,
  survey: surveyReducer,
  save: saveSurveyReducer,
});

export type AppState = ReturnType<typeof applicationReducer>;
