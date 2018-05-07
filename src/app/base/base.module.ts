import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdpartyModule } from './thirdparty/thirdparty.module';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  imports: [
    CommonModule,
    ThirdpartyModule,
  ],
  declarations: [MainPageComponent],
  exports: [
    ThirdpartyModule,
    MainPageComponent,
  ]
})
export class BaseModule { }
