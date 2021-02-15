import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarPageRoutingModule } from './solicitar-routing.module';

import { SolicitarPage } from './solicitar.page';
import { ImageUploadComponent } from '../../../components/image-upload/image-upload.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SolicitarPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCT9wzsIIAkW95uHWVvCbBEP-xtjNbJPow'
    })
  ],
  declarations: [SolicitarPage, ImageUploadComponent],
  exports: [ImageUploadComponent]
})
export class SolicitarPageModule {}
