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