import HttpError from './http-error';

export default class Forbidden extends HttpError {
  code = 403;
  name = 'Forbidden';

  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, Forbidden.prototype);
  }
}
