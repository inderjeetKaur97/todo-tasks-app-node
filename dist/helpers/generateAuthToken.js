"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const generateAuthToken = (userData) => {
    console.log("helpers@generateAuthToken");
    const token = jsonwebtoken_1.default.sign(userData, process.env.TOKEN_SECRET_KEY, {
        expiresIn: `${process.env.TOKEN_EXPIRES_IN}h`,
    });
    return token;
};
exports.default = generateAuthToken;
//# sourceMappingURL=generateAuthToken.js.map