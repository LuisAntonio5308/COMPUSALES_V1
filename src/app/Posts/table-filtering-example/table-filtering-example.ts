import {Component} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


export interface PeriodicElement {
  name: string;
  position: string;
  Company: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '', name: 'Hydrogen', Company: 'A'},
  {position: '', name: 'Helium', Company: ''},
  {position: '', name: 'Lithium', Company: ''},
  {position: '', name: 'Beryllium', Company: ''},
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