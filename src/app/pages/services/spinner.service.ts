import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SpinnerService {

  subSpinner: Subject<boolean> = new Subject<boolean>();
  constructor() { 

  }

  show() {
    this.subSpinner.next(true);
  }

  hide() {
    this.subSpinner.next(false);
  }

  spinnerStatus() {
    return this.subSpinner.asObservable();
  }
}
