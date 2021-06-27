"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
exports.registerSchema = joi_1.default.object({
    email: joi_1.default.string().email().min(8).max(254).lowercase().trim().required(),
    password: joi_1.default.string().min(3).max(128).trim().required(),
    passwordConfirmation: joi_1.default.valid(joi_1.default.ref('password')).required(),
});
//# sourceMappingURL=auth.js.map