export default class CustomError extends Error {
  statusCode = 500;
  message = 'Internal Server Error';
  constructor(message: string, statusCode: number, ...params: any) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = 'CustomError';
    this.message = message;
    this.statusCode = statusCode;
  }
}
