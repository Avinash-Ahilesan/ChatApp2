"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: String,
    name: String,
    password: String
}, {
    timestamps: true
});
exports.User = mongoose_1.model('User', userSchema);
//# sourceMappingURL=user.js.map