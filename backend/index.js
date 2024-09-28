const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const mainRouter = require("./routes/index");
app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use("/api/v1", mainRouter);
app.listen(3000);