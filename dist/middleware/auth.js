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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_config_1 = __importDefault(require("../config/env.config"));
const responseHandler_1 = __importDefault(require("../helpers/responseHandler"));
const userResources_1 = require("../resources/userResources");
const userAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("middlewares@userAuth");
    try {
        let token = req.headers['auth-token'];
        let jwtSecret = env_config_1.default.TOKEN_SECRET_KEY;
        let decoded = jsonwebtoken_1.default.verify(token, jwtSecret);
        if (!decoded)
            return responseHandler_1.default.unauthorized(res, null, "You do not have correct rights to perfrom this action!");
        let userFound = yield userResources_1.userResources.findUserByUsername(decoded.username);
        if (!userFound)
            return responseHandler_1.default.unauthorized(res, null);
        req.user = decoded;
        return next();
    }
    catch (error) {
        console.log("middlewares@userAuth", error);
        return responseHandler_1.default.unauthorized(res, null);
    }
});
exports.default = userAuth;
//# sourceMappingURL=auth.js.map