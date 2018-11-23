import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA.map((el, i) => {
      el['position'] = i + 1;
      return el;
    }));
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }



  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  ELEMENT_DATA = [
    { name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { name: 'Helium', weight: 4.0026, symbol: 'He' },
    { name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { name: 'Boron', weight: 10.811, symbol: 'B' },
    { name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

}
