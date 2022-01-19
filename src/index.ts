// import axios, { AxiosResponse } from 'axios';

// axios.get('http://localhost:3000/users')
//     .then((response: AxiosResponse) => {
//         console.log(response.data);
//     });

import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";

const user = User.buildUser({ name: 'NAME', age: 20 });

const root = document.getElementById('root');

if (root) {
    const userEdit = new UserEdit(root, user);
    userEdit.render();
    console.log(userEdit);
} else {
    throw new Error('root element not found');
}


