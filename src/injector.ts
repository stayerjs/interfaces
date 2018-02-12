import { Observable } from 'rxjs/Observable';

export default interface Injector {
  inject: (constructor: Function, dependencies: Function[]) => void;
  getInstance: (constructor: Function) => Promise<object>;
  getInstanceObs: (constructor: Function) => Observable<object>;
}
