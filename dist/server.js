"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const heroku_ssl_redirect_1 = __importDefault(require("heroku-ssl-redirect"));
dotenv_1.default.config();
app_1.default.use((0, heroku_ssl_redirect_1.default)());
app_1.default.listen(process.env.PORT || 5000);
