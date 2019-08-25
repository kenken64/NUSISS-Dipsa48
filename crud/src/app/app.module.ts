import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ListPicturesComponent } from './components/list-pictures.component';
import { AddPicturesComponent } from './components/add-pictures.component';
import { EditPicturesComponent } from './components/edit-pictures.component';
import { ViewPicturesComponent } from './components/view-pictures.component';

import  { PicturesService } from './services/pictures.service';

@NgModule({
  declarations: [
    AppComponent,
    AddPicturesComponent,
    EditPicturesComponent,
    ViewPicturesComponent,
    ListPicturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PicturesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
