"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SESSION_OPTIONS = void 0;
const app_1 = require("./app");
const HALF_HOUR = 1000 * 60 * 30;
const { SESSION_SECRET = 'secret session', SESSION_NAME = 'sid', SESSION_IDLE_TIMEOUT = HALF_HOUR, } = process.env;
exports.SESSION_OPTIONS = {
    secret: SESSION_SECRET,
    name: SESSION_NAME,
    cookie: {
        maxAge: +SESSION_IDLE_TIMEOUT,
        secure: app_1.IN_PROD,
        sameSite: true
    },
    rolling: true,
    resave: false,
    saveUninitialized: false,
};
//# sourceMappingURL=session.js.map