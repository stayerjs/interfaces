import HttpError from './http-error';

export default class InternalServerError extends HttpError {
  code = 500;
  name = 'InternalServerError';

  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}
