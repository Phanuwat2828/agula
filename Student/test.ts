
class User {
  private name: string = "";
  private age: number = 0;
  public work: string = "";
  constructor(name: string) {
    this.name = name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }

  public set Age(age: number) {
    this.age = age;
  }

  public get Age() {
    return this.age;
  }
}

const json = {
  name: "Aj.M",
  age: 20,
  work: "Computer Science, MSU",
  show(){
    console.log(this.name);
  }
};
console.log(typeof(json));
console.log(json);
console.log(json.name);

console.log(typeof(json));
console.log(json);
console.log(JSON.stringify(json));
console.log(json.name);

let jsonStr: string = JSON.stringify(json);
const jsonObj = JSON.parse(jsonStr);
console.log(jsonObj);
console.log(jsonObj.name);

let user : User = new User('Aj.M');
user.Age = 20;
user.work = 'CS MSU'
console.log(`${user.getName()} ${user.Age} ${user.work}`);

user.setName("Potchara");
console.log(`${user.getName()} ${user.Age} ${user.work}`);
