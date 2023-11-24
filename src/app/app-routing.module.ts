import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },{
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
    },
  
  {
    path: 'input-examen',
    loadChildren: () => import('./pages/input-examen/input-examen.module').then( m => m.InputExamenPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
