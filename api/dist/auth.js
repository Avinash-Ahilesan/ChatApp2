"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIn = exports.isLoggedIn = void 0;
const isLoggedIn = (req) => !!req.session.userId;
exports.isLoggedIn = isLoggedIn;
const logIn = (req, userId) => {
    req.session.userId = userId;
};
exports.logIn = logIn;
//# sourceMappingURL=auth.js.map