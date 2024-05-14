import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MainMenuModule } from '../main-menu/main-menu.module';

@NgModule({
  declarations: [  
  ],
  imports: [
    CommonModule, 
    HomeRoutingModule,
    MainMenuModule,           
  ],
  exports: [  
  ]
})
export class HomeModule { }
