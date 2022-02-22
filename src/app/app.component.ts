import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  //Vista asociada a este componente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tittleColor = "green";
  widthImg = 10;
  name = 'Erika';
  age = 19;
  btnDisabled = true;
  register = {
    name: '',
    email: '',
    password: ''
  }
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
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

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

  onRegister(){
    console.log(this.register);
  }
}
