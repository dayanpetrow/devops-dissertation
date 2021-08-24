"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
/** Middleware */
var body_parser_1 = __importDefault(require("body-parser"));
/** Routes */
var findResponses_1 = require("./controllers/findResponses");
var saveResponse_1 = require("./controllers/saveResponse");
var getResponseCount_1 = require("./controllers/getResponseCount");
var app = express_1.default();
var port = process.env.NODE_ENV === "production" ? process.env.PORT || 8080 : 8080;
app.use([body_parser_1.default.urlencoded({ extended: true }), body_parser_1.default.json()]);
app.use([cors_1.default()]);
app.get("/api/responses", findResponses_1.fetchResponses);
app.get("/api/status", getResponseCount_1.getResponseCount);
app.post("/api/response", saveResponse_1.saveResponse);
app.use(express_1.default.static(path_1.default.join(__dirname, "build")));
app.get("/", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "build", "index.html"));
});
app.listen(port, function () {
    return console.log("DevOps Disseration Backend listening on " + port + "!");
});
