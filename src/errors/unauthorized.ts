import HttpError from './http-error';

export default class Unauthorized extends HttpError {
  code = 401;
  name = 'Unauthorized';

  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, Unauthorized.prototype);
  }
}
