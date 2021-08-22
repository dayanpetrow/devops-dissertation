import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StepperState {
  currentStep: number;
}

const initialState: StepperState = { currentStep: 0 };

const stepperSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    nextStep(state) {
      state.currentStep++;
    },
    prevStep(state) {
      state.currentStep--;
    },
    goStep(state, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },
  },
});

export const { nextStep, prevStep, goStep } = stepperSlice.actions;
export const { reducer: stepperReducer } = stepperSlice;
