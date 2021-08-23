import { Request, response, Response } from "express";
import { dbConnection, dbName, dbCollection } from "../db/mongoClient";

const requiredKeys = [
  "consentFormAccepted",
  "professional",
  "perception",
  "maturity",
  "culture",
  "benefits",
  "challenges",
  "submittedAt",
];

export const saveResponse = async (req: Request, res: Response) => {
  try {
    const { body: surveyResponse } = req;

    const responseKeys = Object.keys(surveyResponse);
    const isValidSurvey = requiredKeys.every((requiredKey: string) =>
      responseKeys.includes(requiredKey)
    );

    if (!isValidSurvey) {
      return res.status(403).json({ errorMessage: "Invalid survey data." });
    }

    await dbConnection.connect();

    const database = dbConnection.db(dbName);
    const collection = database.collection(dbCollection);

    const result = await collection.insertOne(surveyResponse);

    return res.status(200).json(result);
  } catch (err: any) {
    return res.status(500);
  } finally {
    await dbConnection.close();
  }
};
