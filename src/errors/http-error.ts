import Exception from "./exception";

export default abstract class HttpError extends Exception {
  abstract readonly code: number;
  headers: { [key: string]: string } = {};

  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, HttpError.prototype);
  }
}
