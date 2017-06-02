import { ChangeDetectionStrategy, Component } from '@angular/core';

import { <%= classifiedModuleName %>Component } from '../../<%= dasherizedModuleName %>.component';

@Component({
  selector: 'my-view',
  templateUrl: './my-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyViewComponent extends <%= classifiedModuleName %>Component {}
