import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildSampleComponent } from './child-sample/child-sample.component';

const routes: Routes = [
  // { path: 'app1',  loadChildren: () => import('../../projects/app1/src/app/app.module').then(m => m.AppModule)},
  // { path: 'app2',  loadChildren: () => import('../../projects/app2/src/app/app.module').then(m => m.AppModule)},

  { path:  'child-app-1', component:ChildSampleComponent },

  { path: '**', redirectTo: 'child-app-1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
