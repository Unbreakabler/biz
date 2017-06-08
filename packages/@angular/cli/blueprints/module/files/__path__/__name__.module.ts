import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { <%= classifiedModuleName %>Feature } from '../../features/<%= dasherizedModuleName %>';

@NgModule(Framing((framing) => framing
  .use(new <%= classifiedModuleName %>Feature())
))
export class <%= classifiedModuleName %>Module { }
