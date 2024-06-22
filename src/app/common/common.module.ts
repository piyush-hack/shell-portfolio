import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HistoryNavigatorDirective } from './directives/history-navigator.directive';




@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  declarations: [
    HistoryNavigatorDirective
  ],
  exports: [
    HistoryNavigatorDirective
  ]
})
export class AppCommonModule { }
