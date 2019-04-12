import { NgModule, Optional, SkipSelf } from '@angular/core';

/* Global Services, Guards */

@NgModule({
  imports: [],
  declarations: [],
  providers: []
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
