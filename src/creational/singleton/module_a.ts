import { DatabaseClassic } from './db/database-classic';

const dbClassic = DatabaseClassic.instance;

dbClassic.add({ name: 'renan', age: 17 });
dbClassic.add({ name: 'sinhorini', age: 25 });
dbClassic.add({ name: 'pimentel', age: 33 });

dbClassic.show();
