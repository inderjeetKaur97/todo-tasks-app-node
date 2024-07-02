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
exports.userValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const responseHandler_1 = __importDefault(require("../helpers/responseHandler"));
const createUserSchema = (req, res, next) => {
    console.log("uservalidation@createUserSchema");
    let reqSchema = req.body;
    let joiSchema = joi_1.default.object({
        name: joi_1.default.string().required(),
        username: joi_1.default.string().required(),
        email: joi_1.default.string().email().required(),
        password: joi_1.default.string().min(6).required(),
    });
    let { error } = joiSchema.validate(reqSchema);
    if (error)
        return responseHandler_1.default.badRequest(res, error.details[0].message);
    else {
        const salt = bcryptjs_1.default.genSaltSync(10);
        const hashPassword = bcryptjs_1.default.hashSync(req.body.password, salt);
        reqSchema.password = hashPassword;
        return next();
    }
};
const loginUserSchema = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("uservalidation@loginUserSchema");
    let reqSchema = req.body;
    let joiSchema = joi_1.default.object({
        username: joi_1.default.string().required(),
        password: joi_1.default.string().required(),
    });
    let { error } = joiSchema.validate(reqSchema);
    if (error)
        return responseHandler_1.default.badRequest(res, error.details[0].message);
    return next();
});
exports.userValidation = { createUserSchema, loginUserSchema };
//# sourceMappingURL=users.validation.js.map