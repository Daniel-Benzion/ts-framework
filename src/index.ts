// import axios from 'axios';

// axios.post('http://localhost:3000/users', {
//     name: 'myname',
//     age: 20
// });

// axios.get('http://localhost:3000/users');
import { User } from "./models/User";

const user = new User({id: 1});

user.set({ name: 'NEW NAME', age: 9999 });

user.save();

const user2 = new User({ name: 'New record', age: 0 });

user2.save();

user.events.on('change', () => {
    console.log('change!');
});

user.events.trigger('change');