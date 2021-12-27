// import axios from 'axios';

// axios.post('http://localhost:3000/users', {
//     name: 'myname',
//     age: 20
// });

// axios.get('http://localhost:3000/users');
import { User } from "./models/User";

const user = User.buildUser({id: 1});

user.on('change', () => {
    console.log(user);
});

user.fetch();
