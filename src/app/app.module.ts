import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CeAuthModule, CeCoreModule, FormActionDefault } from '@codeffekt/ce-core';
import { CeAdminModule } from '@codeffekt/ce-admin';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeActionDefaultService } from './home/home-action-default.service';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

export interface Config {
  ce_api_config: {      
    api_url: string;
    app_version: string;
    main_title: string;
  }
}

declare let __config: Config;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,  
    CeAuthModule,
    NgxsModule.forRoot([], {
      selectorOptions: {
        suppressErrors: false,
        injectContainerState: false
      }
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),  
    CeCoreModule.forRoot({
      api_url: __config.ce_api_config.api_url
    }),    
    CeAdminModule.forRoot(),
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: FormActionDefault,
      useClass: HomeActionDefaultService,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
