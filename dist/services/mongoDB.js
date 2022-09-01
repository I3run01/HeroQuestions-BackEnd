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
exports.matchPassword = exports.findbyEmail = exports.createUser = void 0;
const users_1 = __importDefault(require("../Model/users"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const hasUser = yield users_1.default.findOne({ email: email });
    if (!hasUser) {
        const hash = bcrypt_1.default.hashSync(password, 10);
        let newUser = yield users_1.default.create({
            email: email,
            password: hash
        });
        yield newUser.save();
        return { response: "user has been created", status: true };
    }
    return { response: "user already exists", status: false };
});
exports.createUser = createUser;
const findbyEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield users_1.default.findOne({ email: email });
});
exports.findbyEmail = findbyEmail;
const matchPassword = (passwordText, encrypted) => __awaiter(void 0, void 0, void 0, function* () {
    return bcrypt_1.default.compareSync(passwordText, encrypted);
});
exports.matchPassword = matchPassword;
