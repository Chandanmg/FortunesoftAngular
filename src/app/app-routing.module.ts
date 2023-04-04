import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstscreenComponent } from './screens/firstscreen/firstscreen.component';


const routes: Routes = [
  { path: '', component: FirstscreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
