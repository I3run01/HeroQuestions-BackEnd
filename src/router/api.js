"use strict";
exports.__esModule = true;
var express_1 = require("express");
var apiController = require("../controller/apiController");
var router = (0, express_1.Router)();
router.get('/ping', apiController.ping);
router.post('/register', apiController.register);
router.post('/login', apiController.login);
exports["default"] = router;
