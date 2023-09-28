import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { PostCreateComponent } from '../Element-Post/post-create/post-create.component';


@Component({
    selector: 'app-dialog',
    templateUrl: 'dialog.component.html',
    styleUrls: ['./dialog.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class DialogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(PostCreateComponent);
  }
}
