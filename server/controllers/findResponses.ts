import { Request, Response } from "express";
import { dbCollection, dbConnection, dbName } from "../db/mongoClient";

export const fetchResponses = async (req: Request, res: Response) => {
  try {
    await dbConnection.connect();

    const database = dbConnection.db(dbName);
    const collection = database.collection(dbCollection);

    const response = await collection.find().toArray();

    return res.status(200).json(response);
  } catch (err: any) {
    return res.status(500);
  } finally {
    await dbConnection.close();
  }
};
