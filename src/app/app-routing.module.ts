import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  {
    path: '',
    children: [
      {
        path: 'list',
        loadChildren: () =>
          import('./pages/list/list.module').then((m) => m.ListModule),
      },
      {
        path: 'handle',
        loadChildren: () =>
          import('./pages/handle/handle.module').then((m) => m.HandleModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
