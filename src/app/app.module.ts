import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { Subject } from 'rxjs';

import { FooterComponent } from './Posts/footer/footer.component';
import { DialogComponent } from './Posts/dialog/dialog.component';


import { MatChipListboxComponent } from './Posts/mat-chip-listbox/mat-chip-listbox.component';
import { ToolbarOverviewExample } from './Posts/toolbar-overview-example/toolbar.component';
import { TableFilteringExample } from './Posts/table-filtering-example/table-filtering-example';






@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MatChipListboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarOverviewExample,
    MatChipsModule,
    MatDialogModule,
    TableFilteringExample,
    MatButtonModule,
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }import { MatChipListbox } from '@angular/material/chips';


