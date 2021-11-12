import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule, BrowserModule, FormsModule, ComponentsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
