import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { DummyFeatRoutingModule } from './dummy-feat-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DummyComponent } from './services/dummy/dummy.component';
import { WrapperComponent } from './pages/wrapper/wrapper.component';

@NgModule({
  declarations: [SidebarComponent, DummyComponent, WrapperComponent],
  imports: [
    SharedModule,
    DummyFeatRoutingModule
  ]
})
export class DummyFeatModule { }
