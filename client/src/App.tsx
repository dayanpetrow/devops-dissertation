import React, { useState } from "react";
import { Survey } from "./pages/Survey/Survey";
import { Home } from "./pages/Home/Home";
import { CompletedPage } from "./pages/Completed/CompletedPage";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { TopBar } from "./components/TopBar/TopBar";
import { AppState } from "./store/rootReducer";

export const App = () => {
  const consentFormAccepted = useSelector(
    (state: AppState) => state.survey.consentFormAccepted
  );

  const surveyCompleted = useSelector((state: AppState) => state.save.success);

  if (surveyCompleted) return <CompletedPage />;

  return (
    <>
      <Helmet>
        <title>DevOps Research</title>
      </Helmet>
      {consentFormAccepted ? <Survey /> : <Home />}
    </>
  );
};
