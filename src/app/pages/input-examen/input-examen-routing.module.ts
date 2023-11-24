import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputExamenPage } from './input-examen.page';

const routes: Routes = [
  {
    path: '',
    component: InputExamenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputExamenPageRoutingModule {}
