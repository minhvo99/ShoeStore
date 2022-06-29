import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestInterceptor } from './shared/interceptor/request.interceptor';
import { ResponseInterceptor } from './shared/interceptor/response.interceptor';
import { SharedModule } from './shared/shared.module';

import { ShopComponent } from './pages/shop/shop.component';
import { HomeComponent } from './pages/home/home.component';

const declarations = [
  AppComponent,
];

@NgModule({
  declarations: [
    ...declarations,
    HomeComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: RequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: ResponseInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
