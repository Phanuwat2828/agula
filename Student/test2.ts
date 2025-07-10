let activiies = ['Sports', 'Programming', 'Eating', 'Sleeping'];
activiies.push('BoardGaming');
console.log(activiies);

let idx = activiies.indexOf('programming');
console.log(idx);

activiies.splice(idx,1);
console.log(activiies);

activiies = ["Sports", "Programming", "Eating", "Sleeping"];
activiies.push("BoardGaming");

idx = activiies.indexOf("Programming");
console.log(idx);

activiies.splice(idx, 1);
console.log(activiies);

activiies.push('BoardGaming');
console.log(activiies);

let indexes = activiies.findIndex((item)=>{
  return item.toLowerCase() === 'eating';
});

console.log(indexes);

activiies.push("BoardGaming");
console.log(activiies);

let filtered = activiies.filter((item) => item.endsWith("ing"));

console.log(filtered);

