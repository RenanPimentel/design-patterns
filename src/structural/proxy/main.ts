import { SystemUserProxy } from './system-users/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Luiz', 'luizOtavio');
  console.log('1 sec');
  console.log(await user.getAddresses());

  console.log('vai se repetir');
  for (let i = 0; i < 5; i++) console.log(await user.getAddresses());
  console.log('veio do cache');
}

clientCode();
