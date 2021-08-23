import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://dissAdmin:bZg0FO4E7gWae0BN@devops-dissertation.jngcj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log("Connected successfully to server");
  } finally {
    await client.close();
  }
}

connect().catch(console.dir);

export const dbConnection = client;

export const dbName = "dissertation";
export const dbCollection =
  process.env.NODE_ENV === "production" ? "prod" : "dev";

// export const dbName = "test";
// export const dbCollection =
//   process.env.NODE_ENV === "production" ? "test" : "test";
