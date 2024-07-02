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
const userModel_1 = __importDefault(require("../model/userModel"));
class employeeController {
    constructor() {
        this.getAllEmployee = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const employees = yield userModel_1.default.find();
                return response.status(200).send({ data: employees });
            }
            catch (error) {
                return response.sendStatus(500);
            }
        });
        this.getEmployee = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = request.params;
                const employee = yield userModel_1.default.findById(id);
                return response.status(200).send({ data: employee });
            }
            catch (error) {
                return response.sendStatus(500);
            }
        });
        this.createEmployee = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, dob, doj, mobile } = request.body;
                const employee = new userModel_1.default({ name, email, dob, doj, mobile });
                yield employee.save();
                return response.status(200).send({ message: 'created employee !', data: employee });
            }
            catch (error) {
                console.log(error);
                return response.sendStatus(500);
            }
        });
    }
}
exports.default = new employeeController();
//# sourceMappingURL=employeeController.js.map