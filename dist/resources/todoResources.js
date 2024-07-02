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
exports.todoResources = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const todoModel_1 = __importDefault(require("../model/todoModel"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const createTodo = (userId_1, title_1, description_1, dueDate_1, ...args_1) => __awaiter(void 0, [userId_1, title_1, description_1, dueDate_1, ...args_1], void 0, function* (userId, title, description, dueDate, setReminder = false, completed = false) {
    try {
        const todoData = new todoModel_1.default({
            userId, title, description, dueDate, setReminder, completed
        });
        let result = yield todoData.save();
        if (result)
            return true;
        else
            return false;
    }
    catch (error) {
        console.log("Error:todoResources@createTodo", error);
        return false;
    }
});
const updateTodo = (id, userId, todoData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield todoModel_1.default.updateOne({ id, userId }, todoData);
        if (result)
            return true;
        else
            return false;
    }
    catch (error) {
        console.log("Error:todoResources@updateTodo", error);
        return false;
    }
});
const deleteTodo = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield todoModel_1.default.deleteOne({ _id: new mongoose_1.default.Types.ObjectId(id), userId });
        if (result)
            return true;
        else
            return false;
    }
    catch (error) {
        console.log("Error:todoResources@deleteTodo", error);
        return false;
    }
});
const fetchTodos = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield todoModel_1.default.aggregate([
            { $match: { userId } },
            {
                $group: {
                    _id: '$dueDate',
                    todos: {
                        $push: {
                            _id: '$_id',
                            title: '$title',
                            description: '$description',
                            completed: '$completed',
                            setReminder: '$setReminder',
                        },
                    },
                },
            },
            { $sort: { _id: -1 } },
        ]).exec();
        if (result)
            return result;
        else
            return false;
    }
    catch (error) {
        console.log("Error:todoResources@fetchTodos", error);
        return false;
    }
});
exports.todoResources = { createTodo, updateTodo, deleteTodo, fetchTodos };
//# sourceMappingURL=todoResources.js.map