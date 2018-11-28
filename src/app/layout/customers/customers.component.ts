import { CustomerService } from './../../services/customer.service';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'phone', 'action'];
  dataSource;

  constructor(
    private dialog: MatDialog,
    private service: CustomerService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.service.customers$.subscribe(customers => {
      this.dataSource = new MatTableDataSource(customers);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editCustomer(customer) {
    this.dialog.open(EditCustomerComponent, {
      data: {
        mode: 'Edit',
        customer
      }
    })
  }

  deleteCustomer(customer) {
    this.service.deleteCustomer(customer);
  }

  openCustomerAddDialog() {
    this.dialog.open(EditCustomerComponent, {
      data: {
        mode: 'Add'
      }
    })
  }
}




