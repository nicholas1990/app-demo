<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
=======
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
// import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
>>>>>>> features/login

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { Tab2Page } from './tab2.page';

import { MaterialModule } from './material.module';

import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,

<<<<<<< HEAD
=======
    // ExploreContainerComponentModule,
>>>>>>> features/login
    Tab2PageRoutingModule,

    MaterialModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
