import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatDialog, MatTableDataSource } from '@angular/material';
import { EditCustomerComponent } from '../customers/edit-customer/edit-customer.component';
import { EditGenresComponent } from './edit-genres/edit-genres.component';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  customers = [
    { name: 'Mr. Omuk', phone: '4556465464' },
    { name: 'Mr. Omuk', phone: '4556465464' },
    { name: 'Mr. Omuk', phone: '4556465464' },
    { name: 'Mr. Omuk', phone: '4556465464' },
    { name: 'Mr. Omuk', phone: '4556465464' },
    { name: 'Mr. Omuk', phone: '4556465464' },
    { name: 'Mr. Omuk', phone: '4556465464' },
    { name: 'Mr. Omuk', phone: '4556465464' },
    { name: 'Mr. Omuk', phone: '4556465464' },
    { name: 'Mr. Omuk', phone: '4556465464' },
    { name: 'Mr. Omuk', phone: '4556465464' },
  ];
  displayedColumns: string[] = ['name', 'phone', 'action'];
  dataSource;

  constructor(private dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.customers);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editCustomer(customer) {
    this.dialog.open(EditGenresComponent, {
      data: {
        mode: 'Edit'
      }
    })
  }

  deleteCustomer(customer) {
    console.log(customer)
  }

  openGenreAddDialog() {
    this.dialog.open(EditGenresComponent, {
      data: {
        mode: 'Add'
      }
    })
  }

}
