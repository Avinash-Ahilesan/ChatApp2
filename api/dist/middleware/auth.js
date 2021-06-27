"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest = void 0;
const auth_1 = require("../auth");
const guest = (req, res, next) => {
    if (auth_1.isLoggedIn(req)) {
        return next(new Error('You are already logged in!'));
    }
    next();
};
exports.guest = guest;
//# sourceMappingURL=auth.js.map