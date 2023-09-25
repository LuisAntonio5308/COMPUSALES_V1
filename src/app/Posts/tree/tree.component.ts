import {NestedTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

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
    children: [{name: 'Agregar'}, {name: 'Mostrar'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Laptops',
    children: [{name: 'Agregar'}, {name: 'Mostrar'}, {name: 'Fruit loops'}],
  },
];
  /*{
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },*/


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
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  tuFuncion(){

  }
  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}