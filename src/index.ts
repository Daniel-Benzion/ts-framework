// import axios, { AxiosResponse } from 'axios';

// axios.get('http://localhost:3000/users')
//     .then((response: AxiosResponse) => {
//         console.log(response.data);
//     });

import { User } from './models/User';

const collection = User.builderUserCollection();

collection.on('change', () => {
    console.log(collection);
});

collection.fetch();