import HttpError from './http-error';

export default class BadRequest extends HttpError {
  code = 400;
  name = 'BadRequest';

  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequest.prototype);
  }
}
