import { CustomerService } from './../../../services/customer.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styles: [
    `mat-form-field {
        width: 100%;
      }
    `
  ]
})
export class EditCustomerComponent implements OnInit {
  mode;
  oldCustomer;
  customer = {
    name: '',
    phone: '',
    isGold: false
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditCustomerComponent>,
    private service: CustomerService
  ) {

  }

  ngOnInit() {
    this.mode = this.data.mode;

    if (this.mode == 'Edit') {
      this.oldCustomer = this.data.customer;
      this.customer.name = this.data.customer.name;
      this.customer.phone = this.data.customer.phone;
      this.customer.isGold = this.data.customer.isGold;
    }
  }

  submission() {
    if (this.mode == 'Add') {
      this.service.addCustomer(this.customer);
    } else {
      this.service.editCustomer(this.oldCustomer, this.customer);
    }

    this.dialogRef.close()
  }

}
