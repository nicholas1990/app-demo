import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
// import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';

import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,

    FormsModule,
    ReactiveFormsModule,

    // ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }]),
    Tab2PageRoutingModule,

    MaterialModule,
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
