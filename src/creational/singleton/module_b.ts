import { DatabaseModule } from './db/database-module';

DatabaseModule.add({ name: 'renan', age: 17 });
DatabaseModule.add({ name: 'sinhorini', age: 25 });
DatabaseModule.add({ name: 'pimentel', age: 33 });

DatabaseModule.show();
