"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employeeController_1 = __importDefault(require("../controllers/employeeController"));
const router = (0, express_1.Router)();
router.get('/employee', employeeController_1.default.getAllEmployee);
router.get('/employee/:id', employeeController_1.default.getEmployee);
router.post('/employee', employeeController_1.default.createEmployee);
exports.default = router;
//# sourceMappingURL=index.js.map