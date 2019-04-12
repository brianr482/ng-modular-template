import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyComponent } from './services/dummy/dummy.component';
import { DummySubModule } from './modules/dummy-sub/dummy-sub.module';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'dummy-component'
  },
  {
    path: 'dummy-component',
    component: DummyComponent,
    children: [
      { // no lazy loading module
        path: 'submodule',
        component: DummySubModule
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DummyFeatRoutingModule { }
