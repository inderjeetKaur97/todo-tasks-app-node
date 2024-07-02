"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const db_config_1 = __importDefault(require("./config/db.config"));
const env_config_1 = __importDefault(require("./config/env.config"));
(0, db_config_1.default)();
//middlewares
app.use(express_1.default.json());
app.use('/api/users', userRoutes_1.default);
app.use('/api/todo', todoRoutes_1.default);
//server port
app.listen(env_config_1.default.APPLICATION_PORT, () => {
    console.log(`Node application running at port ${env_config_1.default.APPLICATION_PORT}`);
});
//# sourceMappingURL=index.js.map