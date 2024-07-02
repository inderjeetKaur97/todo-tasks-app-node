"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    APPLICATION_PORT: process.env.APPLICATION_PORT,
    TOKEN_SECRET_KEY: process.env.TOKEN_SECRET_KEY,
    TOKEN_EXPIRES_IN: process.env.TOKEN_EXPIRES_IN,
    DB_HOST: process.env.DB_HOST,
    DB_COLLECTION: process.env.DB_COLLECTION,
    DB_PORT: process.env.DB_PORT,
};
exports.default = config;
//# sourceMappingURL=env.config.js.map