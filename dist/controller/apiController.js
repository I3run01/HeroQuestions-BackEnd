"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllHeroAnswer = exports.heroQuestions = exports.tokenValidation = exports.login = exports.register = exports.ping = void 0;
const services = __importStar(require("../services/mongoDB"));
const ping = (req, res) => {
    res.json({ "pongTestv2": true });
};
exports.ping = ping;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.email && req.body.password) {
        let { email, password } = req.body;
        const response = yield services.createUser(email, password);
        return res.json(response);
    }
    res.json({ "response": 'E-mail or password not sent', status: false });
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.email && req.body.password) {
        let { email, password } = req.body;
        const user = yield services.findbyEmail(email);
        const matchPassword = yield services.matchPassword(password, user === null || user === void 0 ? void 0 : user.password);
        if (user && matchPassword)
            return res.json({ "status": true, "token": user.token });
        return res.json({ "status": false });
    }
    res.json({ "response": 'E-mail or password not sent', "status": false });
});
exports.login = login;
const tokenValidation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.token) {
        let { token } = req.body;
        const user = yield services.findbyToken(token);
        if (user && (user === null || user === void 0 ? void 0 : user.token) === token)
            return res.json({ "user": user.email, "status": true });
    }
    return res.json({ "status": false });
});
exports.tokenValidation = tokenValidation;
const heroQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.token) {
        let { token, parameter, value } = req.body;
        if (parameter === 'heroName') {
            let status = yield services.sendHeroQuestions(token, { heroName: value });
            return res.json(status);
        }
        if (parameter === 'heroCity') {
            let status = yield services.sendHeroQuestions(token, { heroCity: value });
            return res.json(status);
        }
        if (parameter === 'heroExperience') {
            let status = yield services.sendHeroQuestions(token, { heroExperience: value });
            return res.json(status);
        }
        if (parameter === 'heroLocomotion') {
            let status = yield services.sendHeroQuestions(token, { heroLocomotion: value });
            return res.json(status);
        }
        if (parameter === 'heroAbilities') {
            let status = yield services.sendHeroQuestions(token, { heroAbilities: value });
            return res.json(status);
        }
        if (parameter === 'heroSuperPower') {
            let status = yield services.sendHeroQuestions(token, { heroSuperPower: value });
            return res.json(status);
        }
    }
    res.json({ status: false });
});
exports.heroQuestions = heroQuestions;
const getAllHeroAnswer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.token) {
        let { token } = req.body;
        let response = yield services.getAllHeroAnswer(token);
        return res.json(response);
    }
    res.json({ "status": false });
});
exports.getAllHeroAnswer = getAllHeroAnswer;
