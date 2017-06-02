import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

@NgModule(Framing((framing) => framing
  .imports([
    // ...
  ])
  .declarations([
    // ...
  ])
))
export class <%= classifiedModuleName %>Module { }
