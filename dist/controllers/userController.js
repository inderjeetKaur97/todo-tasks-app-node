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
exports.userController = void 0;
const userResources_1 = require("../resources/userResources");
const responseHandler_1 = __importDefault(require("../helpers/responseHandler"));
const generateAuthToken_1 = __importDefault(require("../helpers/generateAuthToken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, name, email } = req.body;
        let userExist = yield userResources_1.userResources.findUserByUsername(username);
        if (userExist)
            return responseHandler_1.default.badRequest(res, false, 'User Already Exist with username.');
        const userRegistered = yield userResources_1.userResources.registerUser(username, password, name, email);
        if (userRegistered)
            return responseHandler_1.default.success(res, userRegistered, 'User Created Successfully');
        return responseHandler_1.default.internalServerError(res, null);
    }
    catch (error) {
        console.log("Error:userController@register", error);
        res.status(400).json({ error: error.message });
    }
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        let userExist = yield userResources_1.userResources.findUserByUsername(username);
        if (!userExist)
            return responseHandler_1.default.badRequest(res, false, 'Invalid Credentials');
        const match = bcryptjs_1.default.compareSync(password, userExist.password);
        if (!match)
            return responseHandler_1.default.unauthorized(res, null);
        let authToken = (0, generateAuthToken_1.default)({ id: userExist._id, username: userExist.username });
        delete userExist.password;
        let data = Object.assign(Object.assign({}, userExist), { authToken });
        return responseHandler_1.default.success(res, data);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.userController = { register, login };
//# sourceMappingURL=userController.js.map