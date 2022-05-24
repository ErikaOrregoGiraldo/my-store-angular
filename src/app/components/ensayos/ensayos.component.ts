import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ensayos',
  templateUrl: './ensayos.component.html',
  styleUrls: ['./ensayos.component.scss']
})
export class EnsayosComponent implements OnInit {

  tittleColor = "green";
  widthImg = 10;
  name = 'Erika';
  age = 19;
  btnDisabled = true;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  person = {
    name: 'Erika',
    age: 19,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }
  names: string[] = ['Erika', 'Nicolas', 'Santiago'];
  newName = ''
  box = {
    width: 10,
    height: 100,
    background: 'red'
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
