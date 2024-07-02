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
exports.todoController = void 0;
const responseHandler_1 = __importDefault(require("../helpers/responseHandler"));
const todoResources_1 = require("../resources/todoResources");
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userId = req.user.id;
        const { title, description, completed, dueDate, setReminder } = req.body;
        let todoCreated = yield todoResources_1.todoResources.createTodo(userId, title, description, dueDate, setReminder, completed);
        if (todoCreated)
            return responseHandler_1.default.success(res, todoCreated, 'Todo Created Successfully');
        return responseHandler_1.default.internalServerError(res, null);
    }
    catch (error) {
        console.log("Error:todoController@createTodo", error);
        res.status(400).json({ error: error.message });
    }
});
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { title, description, completed, dueDate, setReminder } = req.body;
        let userId = req.user._id;
        let todoId = req.params;
        let todoUpdated = yield todoResources_1.todoResources.updateTodo(todoId, userId, req.body);
        if (todoUpdated)
            return responseHandler_1.default.success(res, todoUpdated, 'Todo Updated Successfully');
        return responseHandler_1.default.internalServerError(res, null);
    }
    catch (error) {
        console.log("Error:todoController@updateTodo", error);
        res.status(400).json({ error: error.message });
    }
});
const fetchTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userId = req.user._id;
        let todoId = req.params;
        let todos = yield todoResources_1.todoResources.fetchTodos(userId);
        if (todos)
            return responseHandler_1.default.success(res, todos, 'Todos fetched Successfully');
        return responseHandler_1.default.internalServerError(res, null);
    }
    catch (error) {
        console.log("Error:todoController@fetchTodos", error);
        res.status(400).json({ error: error.message });
    }
});
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userId = req.user._id;
        let todoId = req.params;
        let todoDeleted = yield todoResources_1.todoResources.deleteTodo(todoId, userId);
        if (todoDeleted)
            return responseHandler_1.default.success(res, todoDeleted, 'Todo Deleted Successfully');
        return responseHandler_1.default.internalServerError(res, null);
    }
    catch (error) {
        console.log("Error:todoController@deleteTodo", error);
        res.status(400).json({ error: error.message });
    }
});
exports.todoController = { createTodo, updateTodo, fetchTodos, deleteTodo };
//# sourceMappingURL=todoController.js.map