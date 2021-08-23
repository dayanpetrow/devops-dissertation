import { Request, Response } from "express";
import { dbCollection, dbConnection, dbName } from "../db/mongoClient";

export const getResponseCount = async (req: Request, res: Response) => {
  try {
    await dbConnection.connect();

    const database = dbConnection.db(dbName);
    const collection = database.collection(dbCollection);

    const count = await collection.estimatedDocumentCount();

    const response = {
      env: process.env.NODE_ENV,
      db: dbName,
      collection: dbCollection,
      responses: count,
    };

    return res.status(200).json(response);
  } catch (err: any) {
    return res.status(500);
  } finally {
    await dbConnection.close();
  }
};
