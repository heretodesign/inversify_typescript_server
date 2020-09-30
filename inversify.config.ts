import { Container } from 'inversify';
import { TYPES } from "./types"
import { User } from './repository/user_repo.interface';

let container = new Container();

//create a binding for class
container.bind<User>(TYPES.User).to(User)

export { container };
