import express from "express";
import cors from "cors";
import { dbConnection, dbName } from "./db/mongoClient";

/** Middleware */
import bodyParser from "body-parser";

/** Routes */
import { fetchResponses } from "./controllers/findResponses";
import { saveResponse } from "./controllers/saveResponse";
import { getResponseCount } from "./controllers/getResponseCount";

const app = express();
const port = 8080;

app.use([bodyParser.urlencoded({ extended: true }), bodyParser.json()]);
app.use([cors()]);

/** Routes */
app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.get("/responses", fetchResponses);
app.get("/count", getResponseCount);
app.post("/response", saveResponse);

app.listen(port, () =>
  console.log(`DevOps Disseration Backend listening on ${port}!`)
);
