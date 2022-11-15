import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 user: UserModel = new UserModel();
 registerForm!: FormGroup;
 public hide : boolean = true ;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      'name': [this.user.name, [
        Validators.required
      ]],
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]],
    });
  }
 
onRegisterSubmit(){
  alert(this.user.name +'' + this.user.email+' '+ this.user.password);
}

}
