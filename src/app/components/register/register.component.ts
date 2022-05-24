import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register = {
    name: '',
    email: '',
    password: ''
  }
  onRegister(){
    console.log(this.register);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
