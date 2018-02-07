import HttpError from "./http-error";

export default class NotImplemented extends HttpError {
  code = 501;
  name = 'NotImplemented';

  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, NotImplemented.prototype);
  }
}
