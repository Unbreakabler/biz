import { Injectable } from '@angular/core';
import { Action, Controller } from '@framing/ng-core';

import { <%= classifiedModuleName %>Model as M } from './<%= dasherizedModuleName %>.model';
import { <%= classifiedModuleName %>View as V } from './<%= dasherizedModuleName %>.view';

@Injectable()
export class <%= classifiedModuleName %>Controller extends Controller<M, V> {
  @Action() myAction(): void {
    this.model.myProperty++;

    // <-- Implement your biznas logic
  }
}
