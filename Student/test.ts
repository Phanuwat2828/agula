
import { Mytext } from './utils';

console.log("Name : " + Mytext["name"]);
console.log("Description : " + Mytext["description"]);
Mytext["friend"].forEach((friend,index) => {
    console.log("Friend ",index+1," : " + friend)
});


