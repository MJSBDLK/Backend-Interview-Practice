if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();

const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

app.use(notFound);
app.use(errorHandler);

module.exports = app;
