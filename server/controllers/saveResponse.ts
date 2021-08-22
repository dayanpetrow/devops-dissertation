import { Request, Response } from "express";
import { dbConnection, dbName, dbCollection } from "../db/mongoClient";

export const saveResponse = async (req: Request, res: Response) => {
  try {
    const { body: surveyResponse } = req;

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
