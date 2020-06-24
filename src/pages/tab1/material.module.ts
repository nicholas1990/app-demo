import { NgModule } from '@angular/core';

// Angular Material Components
import { MatListModule, MatListItem } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    MatListModule
  ],
  exports: [
    MatListModule
  ]
})
export class MaterialModule { }
