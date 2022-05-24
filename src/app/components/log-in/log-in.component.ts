import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  logIn= {
    email: '',
    password: ''
  }

  onLogIn(){
    console.log(this.logIn)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
