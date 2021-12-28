import { Eventing } from './Eventing';
import { User } from './User';

export class Collection {
    models: User[] = [];
    events: Eventing = new Eventing();
}