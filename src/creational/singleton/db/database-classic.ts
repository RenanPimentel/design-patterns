import { User } from '../interfaces/user';

export class DatabaseClassic {
  private static _instance: DatabaseClassic | null = null;
  private _users: Array<User> = [];

  private constructor() {}

  public static get instance(): DatabaseClassic {
    if (DatabaseClassic._instance === null) {
      DatabaseClassic._instance = new DatabaseClassic();
    }

    return DatabaseClassic._instance;
  }

  add(user: User): void {
    this._users.push(user);
  }

  remove(index: number): User {
    return this._users.splice(index, 1)[0];
  }

  show(): void {
    for (const user of this._users) {
      console.log(user);
    }
  }
}
