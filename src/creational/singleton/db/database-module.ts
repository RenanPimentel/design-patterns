import { User } from '../interfaces/user';

const users: Array<User> = [];

export const DatabaseModule = {
  add(user: User): void {
    users.push(user);
  },

  remove(index: number): User {
    return users.splice(index, 1)[0];
  },

  show(): void {
    for (const user of users) {
      console.log(user);
    }
  },
};
