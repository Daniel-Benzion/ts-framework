// import axios from 'axios';

// axios.post('http://localhost:3000/users', {
//     name: 'myname',
//     age: 20
// });

// axios.get('http://localhost:3000/users');
import { User } from "./models/User";

const user = new User({name: 'new record', age: 0});

const on = user.on;

on('change', () => {

});
