import HttpError from './http-error';

export default class Conflict extends HttpError {
  code = 409;
  name = 'Conflict';

  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, Conflict.prototype);
  }
}
