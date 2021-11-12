import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PersonListSearchComponent } from './person-list-search/person-list-search.component';

@NgModule({
  declarations: [PersonListSearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  exports: [PersonListSearchComponent],
})
export class ComponentsModule {}
