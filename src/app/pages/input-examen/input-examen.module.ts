import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputExamenPageRoutingModule } from './input-examen-routing.module';

import { InputExamenPage } from './input-examen.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputExamenPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InputExamenPage]
})
export class InputExamenPageModule {}
