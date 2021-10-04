import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandleComponent } from './handle.component';

const routes: Routes = [
  {
    path: '',
    component: HandleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandleRoutingModule {}
