import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { AppFeature } from '../features/core/app/app.feature';

@NgModule(Framing((framing) => framing
  .frame(new AppFeature())
))
export class AppModule { }
