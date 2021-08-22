import React, { useState } from "react";
import { Survey } from "./pages/Survey/Survey";
import { Home } from "./pages/Home/Home";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

export const App = () => {
  const agreement = useSelector((state: any) => state.agreement);

  return (
    <>
      <Helmet>
        <title>DevOps Research</title>
      </Helmet>
      {agreement ? <Survey /> : <Home />}
    </>
  );
};
