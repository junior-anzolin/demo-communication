import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HandleRoutingModule } from './handle-routing.module';
import { HandleComponent } from './handle.component';


@NgModule({
  declarations: [
    HandleComponent
  ],
  imports: [
    CommonModule,
    HandleRoutingModule
  ]
})
export class HandleModule { }
