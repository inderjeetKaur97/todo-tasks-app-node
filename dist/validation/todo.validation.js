"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const responseHandler_1 = __importDefault(require("../helpers/responseHandler"));
const createTodoSchema = (req, res, next) => {
    console.log("todovalidation@createTodoSchema");
    let reqSchema = req.body;
    let joiSchema = joi_1.default.object({
        title: joi_1.default.string().required(),
        description: joi_1.default.string().required(),
        dueDate: joi_1.default.date().required(),
        completed: joi_1.default.boolean(),
        setReminder: joi_1.default.boolean()
    });
    let { error } = joiSchema.validate(reqSchema);
    if (error)
        return responseHandler_1.default.badRequest(res, error.details[0].message);
    else {
        return next();
    }
};
const updateTodoSchema = (req, res, next) => {
    console.log("todovalidation@updateTodoSchema");
    let reqSchema = req.body;
    let joiSchema = joi_1.default.object({
        title: joi_1.default.string(),
        description: joi_1.default.string(),
        dueDate: joi_1.default.date(),
        completed: joi_1.default.string(),
        setReminder: joi_1.default.boolean(),
    });
    let { error } = joiSchema.validate(reqSchema);
    if (error)
        return responseHandler_1.default.badRequest(res, error.details[0].message);
    else {
        return next();
    }
};
exports.todoValidation = { createTodoSchema, updateTodoSchema };
//# sourceMappingURL=todo.validation.js.map