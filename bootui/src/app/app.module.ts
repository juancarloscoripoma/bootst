import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { GridWComponent } from './components/grid-w/grid-w.component';
import { DestinationComponent } from './components/destination/destination.component';
import { OutputsComponent } from './components/outputs/outputs.component';
import { BoxComponent } from './components/box/box.component';
import { Box2Component } from './components/box2/box2.component';
import { CabinComponent } from './components/cabin/cabin.component';
import { ColumnVerticalComponent } from './components/column-vertical/column-vertical.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridWComponent,
    DestinationComponent,
    OutputsComponent,
    BoxComponent,
    Box2Component,
    CabinComponent,
    ColumnVerticalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
