import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { GridWComponent } from './components/grid-w/grid-w.component';
import { DestinationComponent } from './components/destination/destination.component';
import { OutputsComponent } from './components/outputs/outputs.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridWComponent,
    DestinationComponent,
    OutputsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
