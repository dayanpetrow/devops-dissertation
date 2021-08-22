import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/rootReducer";
import { nextStep } from "../Stepper/stepperSlice";
import { setStepData } from "../surveySlice";

export const useStepUtils = (stepName: any) => {
  const dispatch = useDispatch();
  const stepState = useSelector((state: AppState) => state.survey[stepName]);

  const [formData, setFormData] = useState({} as any);
  const submitData = useRef(formData);

  const onChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onChangeByName = (name: string, value: any) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const saveStepData = () => {
    const payload = {
      key: stepName,
      stepData: submitData.current,
    };

    dispatch(setStepData(payload));
  };

  const onSubmit = () => {
    dispatch(nextStep());
  };

  useEffect(() => {
    setFormData(stepState);

    return () => {
      saveStepData();
    };
  }, []);

  // allow auto-save on component unmount
  useEffect(() => {
    submitData.current = formData;
  }, [formData]);

  return [formData, onChange, onChangeByName, onSubmit];
};
