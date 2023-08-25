import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina2PageRoutingModule } from './pagina2-routing.module';

import { Pagina2Page } from './pagina2.page';

import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina2PageRoutingModule,
    MatProgressBarModule
  ],
  declarations: [Pagina2Page]
})
export class Pagina2PageModule {}


