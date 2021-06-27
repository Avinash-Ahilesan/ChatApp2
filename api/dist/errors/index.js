"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequest = void 0;
class HttpError extends Error {
}
class BadRequest extends HttpError {
    constructor(message = 'BadRequest') {
        super(message);
        this.status = 400;
    }
}
exports.BadRequest = BadRequest;
//# sourceMappingURL=index.js.map