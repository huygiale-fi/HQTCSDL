import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LostUpdateComponent } from './lost-update/lost-update.component';

const routes: Routes = [
  { path: 'lost-update', component: LostUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
