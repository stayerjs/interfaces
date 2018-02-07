import HttpError from './http-error';

export default class MethodNotAllowed extends HttpError {
  code = 405;
  name = 'MethodNotAllowed';

  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, MethodNotAllowed.prototype);
  }
}
