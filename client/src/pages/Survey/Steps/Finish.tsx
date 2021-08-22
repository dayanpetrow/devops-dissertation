import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/rootReducer";
import { Steps } from "../types";

export const Finish = () => {
  const stepState: any = useSelector((state: AppState) => state.survey);
  return (
    <div className={"step-wrapper"}>
      {Object.keys(stepState).map((_stepName) => (
        <>
          <h1>{_stepName}</h1>
          {JSON.stringify(stepState[_stepName])}
          {(_stepName === Steps.CULTURE || _stepName === Steps.MATURITY) && (
            <h2>
              {Object.keys(stepState[_stepName])
                .map((key: string) => parseInt(stepState[_stepName][key]))
                .reduce((accumulator: number, currentValue: number) => {
                  return accumulator + currentValue;
                }, 0)}
            </h2>
          )}
        </>
      ))}
    </div>
  );
};
