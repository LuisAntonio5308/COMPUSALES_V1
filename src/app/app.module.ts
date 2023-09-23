import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';



import {MatTreeModule} from '@angular/material/tree';
import { Subject } from 'rxjs';

import { FooterComponent } from './Posts/footer/footer.component';
import { DialogComponent } from './Posts/dialog/dialog.component';
import { TreeComponent } from './Posts/tree/tree.component';

import { MatChipListboxComponent } from './Posts/mat-chip-listbox/mat-chip-listbox.component';
import { TableFilteringExample } from './Posts/table-filtering-example/table-filtering-example';
import { ProgressBarConfigurableExample } from './Posts/progress-bar-indeterminate-example/progress-bar';

import { ToolbarOverviewExample } from './Posts/toolbar-overview-example/toolbar.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MatChipListboxComponent,
    ToolbarOverviewExample
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatDialogModule,
    TableFilteringExample,
    MatButtonModule,
    DialogComponent,
    MatTreeModule,
    TreeComponent,
    ProgressBarConfigurableExample,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }import { MatChipListbox } from '@angular/material/chips';



