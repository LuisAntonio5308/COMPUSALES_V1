import {Component} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '', name: 'Hydrogen', weight: ''},
  {position: '', name: 'Helium', weight: ''},
  {position: '', name: 'Lithium', weight: ''},
  {position: '', name: 'Beryllium', weight: ''},
];

@Component({
  selector: 'table-filtering-example',
  styleUrls: ['table-filtering-example.css'],
  templateUrl: 'table-filtering-example.html',
  standalone: true,
  imports: [MatTableModule],
})
export class TableFilteringExample {
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;
}