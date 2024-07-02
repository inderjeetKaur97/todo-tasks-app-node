"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_validation_1 = require("../validation/todo.validation");
const todoController_1 = require("../controllers/todoController");
const auth_1 = __importDefault(require("../middleware/auth"));
const router = (0, express_1.Router)();
router.post('/create', auth_1.default, todo_validation_1.todoValidation.createTodoSchema, todoController_1.todoController.createTodo);
router.get('/fetch', auth_1.default, todoController_1.todoController.fetchTodos);
router.put('/update/:id', auth_1.default, todo_validation_1.todoValidation.updateTodoSchema, todoController_1.todoController.updateTodo);
router.delete('/delete/:id', auth_1.default, todoController_1.todoController.deleteTodo);
exports.default = router;
//# sourceMappingURL=todoRoutes.js.map