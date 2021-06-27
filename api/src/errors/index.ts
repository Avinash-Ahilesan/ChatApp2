abstract class HttpError extends Error {
    public status!: number
}

export class BadRequest extends HttpError {
    constructor (message = 'BadRequest') {
        super(message)

        this.status = 400
    }
}

export class Unauthorized extends HttpError {
    constructor (message = 'Unauthorized') {
        super(message)

        this.status = 401
    }
}