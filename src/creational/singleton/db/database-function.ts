import { User } from '../interfaces/user';

export const DatabaseFunction = (() => {
  const users: Array<User> = [];

  return {
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
})();
