const express = require("express");
const cors = require("cors");

const userRouter = require("./chromeapi/Api/Routers/userRouter");
const tokenRouter = require("./chromeapi/Api/Routers/tokenRouter");
const accountRouter = require("./chromeapi/Api/Routers/accountRouter");

//MIDDLEWARE
const app = express();
app.use(express.json({limit: "100kb"}));

app.use(cors());
app.options("*", cors());

//ROUTES
app.use("/api/v1/user",userRouter);
app.use("/api/v1/tokens", tokenRouter);
app.use("/api/v1/account", accountRouter);

module.exports = app;