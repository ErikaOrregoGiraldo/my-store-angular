const username: string = 'erika';
const sum = (a: number, b: number) => {
  return a + b
}
sum(1,3);

class Persona {
  constructor(public age: number, public lastname: string){}
}

const erika = new Persona(19, 'Orrego');
erika.age;

