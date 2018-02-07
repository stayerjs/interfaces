import HttpError from './http-error';

export default class NotFound extends HttpError {
  code = 404;
  name = 'NotFound';

  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, NotFound.prototype);
  }
}
