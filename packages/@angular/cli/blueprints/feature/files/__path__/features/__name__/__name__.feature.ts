import { Type } from '@angular/core';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { <%= classifiedModuleName %>Controller as C } from './<%= dasherizedModuleName %>.controller';
import { <%= classifiedModuleName %>Model as M } from './<%= dasherizedModuleName %>.model';
import { <%= classifiedModuleName %>View as V } from './<%= dasherizedModuleName %>.view';

import { MyViewComponent } from './view/my-view/my-view.component';
import { <%= classifiedModuleName %>ViewModule } from './view/view.module';

export class <%= classifiedModuleName %>Feature extends Framer<M, V> {
  public get defaultModel(): M {
    return {
      myProperty: 0,
    };
  }

  public get defaultView(): V {
    return {
      myView: MyViewComponent,
    };
  }

  public frame(framing: FramingNgModule): void {
    framing
      .import(<%= classifiedModuleName %>ViewModule)
      .component(this.theView.myView);
  }

  // ========================================
  // internal framing methods (don't touch!)
  // ========================================

  public get framerName(): string { return '<%= classifiedModuleName %>'; }

  public get defaultController(): Type<C> { return C; }
}
