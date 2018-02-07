export default abstract class Exception extends Error {
  abstract readonly name: string;

  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, Exception.prototype);
  }
}
