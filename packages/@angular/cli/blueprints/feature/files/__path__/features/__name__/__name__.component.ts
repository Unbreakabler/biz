import { Component as AngularComponent, Injector } from '@angular/core';
import { Component } from '@framing/ng-core';

import { <%= classifiedModuleName %>Controller } from './<%= dasherizedModuleName %>.controller';
import { <%= classifiedModuleName %>Model } from './<%= dasherizedModuleName %>.model';
import { <%= classifiedModuleName %>View } from './<%= dasherizedModuleName %>.view';

@AngularComponent({})
export class <%= classifiedModuleName %>Component extends Component<M, V, C> {
  constructor(controller: C, injector: Injector) {
    super(controller, injector);
  }
}
