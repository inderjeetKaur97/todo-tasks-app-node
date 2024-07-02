"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const users_validation_1 = require("../validation/users.validation");
const router = (0, express_1.Router)();
router.post('/register', users_validation_1.userValidation.createUserSchema, userController_1.userController.register);
router.post('/login', users_validation_1.userValidation.loginUserSchema, userController_1.userController.login);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map