import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { OverlayExampleComponent } from './components/overlay-example/overlay-example.component';

@NgModule({
  declarations: [
    AppComponent,
    OverlayExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent, OverlayExampleComponent]
})
export class AppModule { }
