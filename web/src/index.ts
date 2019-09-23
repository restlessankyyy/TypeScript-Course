import { UserForm } from './views/UserForm';
import { User } from './models/User';

const userForm = new UserForm(document.getElementById('root'), User.buildUser({ name: 'name', age: 1 }));
userForm.render()