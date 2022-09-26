"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllHeroAnswer = exports.sendHeroQuestions = exports.matchPassword = exports.findbyToken = exports.findbyEmail = exports.createUser = void 0;
const aestrfw_1 = __importDefault(require("../Model/aestrfw"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const hasUser = yield aestrfw_1.default.findOne({ email: email });
    if (!hasUser) {
        const hash = bcrypt_1.default.hashSync(password, 10);
        const token = bcrypt_1.default.hashSync(email + String(Math.random()), 10);
        let newUser = yield aestrfw_1.default.create({
            email: email,
            password: hash,
            token: token,
            heroQuestions: {
                heroName: null,
                heroCity: null,
                heroExperience: null,
                heroLocomotion: null,
                heroAbilities: null,
                heroSuperPower: null,
            },
        });
        yield newUser.save();
        return { response: "user has been created", status: true, token: token };
    }
    return { response: "user already exists", status: false };
});
exports.createUser = createUser;
const findbyEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield aestrfw_1.default.findOne({ email: email });
});
exports.findbyEmail = findbyEmail;
const findbyToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    return yield aestrfw_1.default.findOne({ token: token });
});
exports.findbyToken = findbyToken;
const matchPassword = (passwordText, encrypted) => __awaiter(void 0, void 0, void 0, function* () {
    if (passwordText && encrypted)
        return bcrypt_1.default.compareSync(passwordText, encrypted);
    return false;
});
exports.matchPassword = matchPassword;
const sendHeroQuestions = (token, heroQuestions) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield aestrfw_1.default.findOne({ token: token });
    if (user && (heroQuestions === null || heroQuestions === void 0 ? void 0 : heroQuestions.heroName)) {
        yield aestrfw_1.default.updateOne({ token: token }, {
            $set: {
                'heroQuestions.heroName': heroQuestions.heroName
            }
        });
        return { status: true };
    }
    if (user && (heroQuestions === null || heroQuestions === void 0 ? void 0 : heroQuestions.heroCity)) {
        yield aestrfw_1.default.updateOne({ token: token }, {
            $set: {
                'heroQuestions.heroCity': heroQuestions.heroCity
            }
        });
        return { status: true };
    }
    if (user && (heroQuestions === null || heroQuestions === void 0 ? void 0 : heroQuestions.heroExperience)) {
        yield aestrfw_1.default.updateOne({ token: token }, {
            $set: {
                'heroQuestions.heroExperience': heroQuestions.heroExperience
            }
        });
        return { status: true };
    }
    if (user && (heroQuestions === null || heroQuestions === void 0 ? void 0 : heroQuestions.heroLocomotion)) {
        yield aestrfw_1.default.updateOne({ token: token }, {
            $set: {
                'heroQuestions.heroLocomotion': heroQuestions.heroLocomotion
            }
        });
        return { status: true };
    }
    if (user && (heroQuestions === null || heroQuestions === void 0 ? void 0 : heroQuestions.heroAbilities)) {
        yield aestrfw_1.default.updateOne({ token: token }, {
            $set: {
                'heroQuestions.heroAbilities': heroQuestions.heroAbilities
            }
        });
        return { status: true };
    }
    if (user && (heroQuestions === null || heroQuestions === void 0 ? void 0 : heroQuestions.heroSuperPower)) {
        yield aestrfw_1.default.updateOne({ token: token }, {
            $set: {
                'heroQuestions.heroSuperPower': heroQuestions.heroSuperPower
            }
        });
        return { status: true };
    }
    return { response: 'No user user has been founded', status: false };
});
exports.sendHeroQuestions = sendHeroQuestions;
const getAllHeroAnswer = (token) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield aestrfw_1.default.findOne({ token: token });
    if (user) {
        let heroQuestions = user === null || user === void 0 ? void 0 : user.heroQuestions;
        return { status: true, heroQuestions };
    }
    return { status: false, response: 'No user has been founded' };
});
exports.getAllHeroAnswer = getAllHeroAnswer;
