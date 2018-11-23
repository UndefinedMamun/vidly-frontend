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
  customer = {
    name: '',
    phone: ''
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditCustomerComponent>
  ) {

  }

  ngOnInit() {
    this.mode = this.data.mode;
  }

  submission() {
    console.log(this.customer)
    this.dialogRef.close()
  }

}
