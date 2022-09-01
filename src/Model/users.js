"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});
var modelName = 'users';
var usersModel = mongoose_1.connection && mongoose_1.connection.models[modelName] ? mongoose_1.connection.models[modelName] : (0, mongoose_1.model)(modelName, schema);
exports["default"] = usersModel;
