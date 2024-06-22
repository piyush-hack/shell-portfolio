import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppCommonModule } from './common/common.module';



export function onAppInit(): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      // await appserverconnector.init();
      resolve(true);
    });
  }
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    AppCommonModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: onAppInit,
    deps: [],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
