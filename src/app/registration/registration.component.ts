import { UsresService } from './../services/usres.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service: UsresService) { }

  ngOnInit() {
  }

  // isPasswordMatch(password, confirmPassword) {
  //   console.log(confirmPassword)
  //   if (password.value === confirmPassword.value) {
  //     confirmPassword.errors = null
  //   } else {
  //     confirmPassword.errors['match'] = true;
  //   }
  //   // return false;
  // }

  createAccount(f) {
    let user = f.value;
    user = { name: user.name, email: user.email, password: user.passwords.confirmPassword };
    console.log(user)
    this.service.addUser(user);
  }

}
