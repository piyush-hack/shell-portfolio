import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesModule } from './services/services.module';
import { RouteNames } from './routing-utils';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ServicesModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
