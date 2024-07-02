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
exports.userResources = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const userModel_1 = __importDefault(require("../model/userModel"));
dotenv_1.default.config();
const registerUser = (username, password, email, name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = new userModel_1.default({
            name, username, email, password
        });
        let result = yield userData.save();
        if (result)
            return true;
        else
            return false;
    }
    catch (error) {
        console.log("Error:userResources@registerUser", error);
        return false;
    }
});
const findUserByUsername = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userModel_1.default.findOne({ username });
        if (result)
            return result._doc;
        else
            return false;
    }
    catch (error) {
        console.log("Error:userResources@findUserByUsername", error);
        return false;
    }
});
exports.userResources = { registerUser, findUserByUsername };
//# sourceMappingURL=userResources.js.map