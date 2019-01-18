import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  url = environment.server + "/api/customers/";
  customers = [];
  customers$ = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.getCustomer();
  }

  emit() {
    this.customers$.next(this.customers);
  }

  getCustomer() {
    this.http.get(this.url).subscribe((res: any) => {
      this.customers = res;
      this.emit();
    });
  }

  editCustomer(oldCustomer, updateCustomer) {
    this.http.put(this.url + oldCustomer._id, updateCustomer).subscribe(res => {
      let index = this.customers.indexOf(oldCustomer);
      this.customers[index] = res;
      this.emit();
    });
  }

  addCustomer(customer) {
    this.http.post(this.url, customer).subscribe(res => {
      this.customers.push(res);
      this.emit();
    });
  }

  deleteCustomer(customer) {
    this.http.delete(this.url + customer._id).subscribe(res => {
      let index = this.customers.indexOf(customer);
      this.customers.splice(index, 1);
      this.emit();
    });
  }
}
