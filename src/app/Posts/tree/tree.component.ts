import {NestedTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { PostCreateComponent } from '../Element-Post/post-create/post-create.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ViewChild } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Computadoras',
    children: [{name: ''}],
  },
  {
    name: 'Laptops',
    children: [{name: ''}],
  },
];


/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'app-tree-component',
  templateUrl: 'tree.component.html',
  styleUrls: ['tree.component.css'],
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
})
export class TreeComponent {
  [x: string]: any;
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  @ViewChild(DialogComponent)
  componente: DialogComponent;
  
  
  constructor(public dialog: MatDialog) {
    this.dataSource.data = TREE_DATA;

  }
  openDialog() {
    this.dialog.open(PostCreateComponent);
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}