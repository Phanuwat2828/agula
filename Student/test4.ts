import { prompt } from './prompt'



(async () => {
    const userKey = await prompt("Enter your Key");
    if(userKey == '1234'){
    console.log('Enter with 1234');
    } else if(userKey == '9999'){
    console.log("Enter with 9999");
    }else{
    console.log("Enter WRONG key");
    }
})();

const users = ["Aj.M", "admin", "user1", "someone"];

for (let index = 0; index < users.length; index++) {
  console.log(users[index]);
}

console.log('=======');

for (const user of users) {
  console.log(user);
}

const users1 = ["Aj.M", "admin", "user1", "someone"];

let idx1 = 0;
while (idx1 < users.length) {
  console.log(users[idx1]);
  idx1++;
} 