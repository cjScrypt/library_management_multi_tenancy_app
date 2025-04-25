export class APIError extends Error {
    statusCode: number;

    constructor(
        message="Internal Server Error",
        statusCode=500
    ) {
        super(message);
        this.statusCode = statusCode;
    }
}