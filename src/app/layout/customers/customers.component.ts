import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
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
    this.dialog.open(EditCustomerComponent, {
      data: {
        mode: 'Edit'
      }
    })
  }

  deleteCustomer(customer) {
    console.log(customer)
  }

  openCustomerAddDialog() {
    this.dialog.open(EditCustomerComponent, {
      data: {
        mode: 'Add'
      }
    })
  }
}




