import express from "express";
import cors from "cors";
import path from "path";
import { dbConnection, dbName } from "./db/mongoClient";

/** Middleware */
import bodyParser from "body-parser";

/** Routes */
import { fetchResponses } from "./controllers/findResponses";
import { saveResponse } from "./controllers/saveResponse";
import { getResponseCount } from "./controllers/getResponseCount";

const app = express();
const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 8080 : 8080;

app.use([bodyParser.urlencoded({ extended: true }), bodyParser.json()]);
app.use([cors()]);

app.get("/api/responses", fetchResponses);
app.get("/api/status", getResponseCount);
app.post("/api/response", saveResponse);

app.use(express.static(path.join(__dirname, "build")));
app.get("/", (req: any, res: any) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () =>
  console.log(`DevOps Disseration Backend listening on ${port}!`)
);
