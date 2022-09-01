"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var dotenv_1 = require("dotenv");
var cors_1 = require("cors");
var api_1 = require("./router/api");
var mongoDB_1 = require("./database/mongoDB");
dotenv_1["default"].config();
var server = (0, express_1["default"])();
server.use((0, cors_1["default"])());
(0, mongoDB_1.mongoConnect)();
server.use(express_1["default"].static(path_1["default"].join(__dirname, '../public')));
server.use(express_1["default"].urlencoded({ extended: true }));
server.use(api_1["default"]);
server.use(function (req, res) {
    res.status(404);
    res.json({ error: 'Endpoint not found' });
});
var errorHandler = function (err, req, res, next) {
    res.status(400);
    console.log(err);
    res.json({ error: 'OK' });
};
server.use(errorHandler);
exports["default"] = server;
