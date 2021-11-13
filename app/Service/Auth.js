import Storage from '@Utils/Storage';


async function getAccount() {
  return await Storage.get('account');
}

async function setAccount(data) {
  return await Storage.set('account', data);
}


async function logout() {
  return await Storage.set('account', null);
}


export default {
  logout,
  getAccount,
  setAccount
};
