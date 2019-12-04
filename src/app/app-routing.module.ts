import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dummy-feat-module',
    loadChildren: () => import('./feat/dummy-feat/dummy-feat.module').then(m => m.DummyFeatModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
