// import axios, { AxiosResponse } from 'axios';

// axios.get('http://localhost:3000/users')
//     .then((response: AxiosResponse) => {
//         console.log(response.data);
//     });

import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const user = User.buildUser({ name: 'NAME', age: 20 });

const userForm = new UserForm(document.getElementById('root'), user);

userForm.render();