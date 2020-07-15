import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,

    RouterModule.forChild([{ path: '', component: TabsPage }]),
    TabsPageRoutingModule,

    MaterialModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
