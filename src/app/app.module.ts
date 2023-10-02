import {NgModule, isDevMode} from '@angular/core';
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {BrowserModule, Title} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClient, HttpClientJsonpModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

// Import app component
import {AppComponent} from './app.component';
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule, ImgModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular-pro';
import {IconModule, IconSetService} from '@coreui/icons-angular';
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TitleStrategy} from "@angular/router";
import {TranslateTitleStrategyService} from "./translate-title-strategy.service";
import { ServiceWorkerModule } from '@angular/service-worker';
import {BidiModule} from "@angular/cdk/bidi";
import {NgScrollbarModule} from "ngx-scrollbar";
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}



const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    BidiModule,
    HttpClientJsonpModule,
    CardModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ImgModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgScrollbarModule
  ],
  providers: [
   /* {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiConnectionInterceptorInterceptor, multi: true
    },*/

    {
      provide: TitleStrategy,
      useClass: TranslateTitleStrategyService
    },

    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },

    IconSetService,
    Title
  ],
  bootstrap: [AppComponent],


})
export class AppModule {
}
