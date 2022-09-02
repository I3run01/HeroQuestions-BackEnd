"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const api_1 = __importDefault(require("./router/api"));
const heroku_ssl_redirect_1 = __importDefault(require("heroku-ssl-redirect"));
const mongoDB_1 = require("./database/mongoDB");
dotenv_1.default.config();
const server = (0, express_1.default)();
server.use((0, cors_1.default)());
(0, mongoDB_1.mongoConnect)();
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
server.use(express_1.default.urlencoded({ extended: true }));
server.use(api_1.default);
server.use((req, res) => {
    res.status(404);
    res.json({ error: 'Endpoint not found' });
});
const errorHandler = (err, req, res, next) => {
    res.status(400);
    console.log(err);
    res.json({ error: 'OK' });
};
server.use(errorHandler);
server.use((0, heroku_ssl_redirect_1.default)());
exports.default = server;
