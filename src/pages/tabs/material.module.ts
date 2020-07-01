import { NgModule } from '@angular/core';

// Angular Material Components
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatBadgeModule
  ],
  exports: [
    MatIconModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
