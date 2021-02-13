import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserinfoPageRoutingModule } from './userinfo-routing.module';

import { UserinfoPage } from './userinfo';
import { AgmCoreModule } from '@agm/core';

//c98ee318-8238-429c-aa21-d0cc02f7e9ea
//AIzaSyCrTJjf1ciS5DS5feqEWFX1pntGc7MFJi4
//AIzaSyCT9wzsIIAkW95uHWVvCbBEP-xtjNbJPow
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserinfoPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCT9wzsIIAkW95uHWVvCbBEP-xtjNbJPow'
    })
  ],
  declarations: [UserinfoPage]
})
export class UserinfoPageModule {}
