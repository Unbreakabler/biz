import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { MyViewComponent } from './my-view.component';

@NgModule(Framing((framing) => framing
  .declarationsAndEntryComponents([
    MyViewComponent,

    // <-- List your default view components here
  ])
))
export class <%= classifiedModuleName %>ViewModule { }
