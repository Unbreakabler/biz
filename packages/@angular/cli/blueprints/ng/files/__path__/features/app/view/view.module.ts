import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { AppRootComponent } from './app-root/app-root.component';

@NgModule(Framing((framing) => framing
  .declarationsAndEntryComponents([
    AppRootComponent,

    // <-- List your view components here
  ])
))
export class AppViewModule { }
