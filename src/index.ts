import { User } from "./models/User";

const user = new User({ name: 'myname', age: 20 });

console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'newname', age: 999 });

console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'anothername'});

console.log(user.get('name'));