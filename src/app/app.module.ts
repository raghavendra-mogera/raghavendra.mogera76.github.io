import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SpacexComponent } from './spacex/spacex.component';
import { ProgramComponent } from './program/program.component';
import { FilterComponent } from './filter/filter.component';


import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProgramEffects } from './programs.effect';
import { ProgramReducer } from './programs.reducer';


@NgModule({
  declarations: [
    AppComponent,
    SpacexComponent,
    ProgramComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot({  programs: ProgramReducer }),
    EffectsModule.forRoot([ProgramEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
