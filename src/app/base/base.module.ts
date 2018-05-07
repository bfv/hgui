import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdpartyModule } from './thirdparty/thirdparty.module';

@NgModule({
  imports: [
    CommonModule,
    ThirdpartyModule,
  ],
  declarations: [],
  exports: [
    ThirdpartyModule
  ]
})
export class BaseModule { }
