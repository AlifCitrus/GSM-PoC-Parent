import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'child-app-1',  loadChildren: () => import('../../projects/gsm-po-c-child-1/src/app/app.module').then(m => m.AppModule)},
  { path: 'child-app-2',  loadChildren: () => import('../../projects/gsm-po-c-child-2/src/app/app.module').then(m => m.AppModule)},
  { path: '**', redirectTo: 'child-app-1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
