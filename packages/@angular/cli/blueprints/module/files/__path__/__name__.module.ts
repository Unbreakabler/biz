import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

@NgModule(Framing((framing) => framing
  .frame(
    // <-- Add your features here
  )
))
export class <%= classifiedModuleName %>Module { }
