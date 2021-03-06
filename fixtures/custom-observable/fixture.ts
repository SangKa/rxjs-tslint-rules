import { Observable } from "rxjs/Observable";

function staticCustom<T>(): Observable<T> {
    return null;
}

Observable.custom = staticCustom;

declare module "rxjs/Observable" {
    namespace Observable {
        export let custom: typeof staticCustom;
    }
}

const ob = Observable.custom();
