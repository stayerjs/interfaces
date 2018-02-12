import HttpMethod from './http-method';

export default interface Endpoint {
  method: HttpMethod,
  route: string,
  /**
   * @deprecated
  */
  propertyName?: string,
  /**
   * @deprecated
  */
  service?: Promise<object>,
  fn$: Promise<Function>,
}
