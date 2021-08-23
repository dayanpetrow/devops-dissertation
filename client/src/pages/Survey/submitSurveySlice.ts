import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";
import { AppState } from "../../store/rootReducer";

export interface SaveSurveyState {
  error: null | string;
  loading: boolean;
  success: boolean;
}

const initialState: SaveSurveyState = {
  loading: false,
  error: null,
  success: false,
};

const saveSurveySlice = createSlice({
  name: "save-survey",
  initialState: initialState,
  reducers: {
    saveSurveyInit(state) {
      state.error = null;
      state.loading = true;
      state.success = false;
    },
    saveSurveySuccess(state) {
      state.loading = false;
      state.success = true;
    },
    saveSurveyFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    resetSaveSurveyState() {
      return initialState;
    },
  },
});

const { saveSurveyInit, saveSurveySuccess, saveSurveyFailure } =
  saveSurveySlice.actions;
export const { resetSaveSurveyState } = saveSurveySlice.actions;
export const { reducer: saveSurveyReducer } = saveSurveySlice;

export const callSaveSurveyAPI =
  () => async (dispatch: any, getState: () => AppState) => {
    dispatch(saveSurveyInit());
    try {
      const surveyData = getState().survey;

      await axios.post("/api/response", {
        ...surveyData,
        submittedAt: Date.now(),
      });

      dispatch(saveSurveySuccess());
    } catch (error) {
      dispatch(saveSurveyFailure(error));
      message.error("We failed to save your responses!");
    }
  };
