import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
