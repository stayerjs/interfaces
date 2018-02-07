import HttpMethod from './http-method';

export default interface Endpoint {
  method: HttpMethod,
  route: string,
  propertyName: string,
  serviceName?: string,
  service: Function,
}
