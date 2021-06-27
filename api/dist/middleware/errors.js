"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.internalServerError = exports.notFound = exports.catchAsync = void 0;
const catchAsync = (handler) => (...args) => handler(...args).catch(args[2]);
exports.catchAsync = catchAsync;
const notFound = (req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
};
exports.notFound = notFound;
const internalServerError = (err, req, res, next) => {
    if (!err.status) {
        console.error(err.stack);
    }
    res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
};
exports.internalServerError = internalServerError;
//# sourceMappingURL=errors.js.map