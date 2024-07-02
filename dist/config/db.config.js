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
const mongoose_1 = __importDefault(require("mongoose"));
const env_config_1 = __importDefault(require("./env.config"));
const connectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let connected = yield mongoose_1.default.connect(`mongodb://${env_config_1.default.DB_HOST}:${env_config_1.default.DB_PORT}/${env_config_1.default.DB_COLLECTION}`);
        if (connected)
            console.log("Connection to MongoDB successfull.");
        else
            console.log("Connection to MongoDB Failed.");
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = connectDb;
//# sourceMappingURL=db.config.js.map