"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
var app_1 = require("./app");
dotenv_1["default"].config();
app_1["default"].listen(process.env.PORT || 5000);
