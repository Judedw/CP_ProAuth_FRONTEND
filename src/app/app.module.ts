import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestureConfig } from '@angular/material';

import { rootRouterConfig } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';


import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { UserService } from './views/sessions/UserService.service';





// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    // ANGULAR MATERIAL SLIDER FIX
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
