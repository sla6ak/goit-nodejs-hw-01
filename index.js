console.log('hello');
const argv = require('yargs').argv;
const contactsPath = require('./db/contacts');

async function invokeAction({ action, id, name, email, phone }) {
  let response = null;
  switch (action) {
    case 'list':
      response = await contactsPath.listContacts();
      console.log(response);
      break;

    case 'get':
      response = await contactsPath.getContactById(id.toString());
      if (!response) {
        throw new Error(`Contact ${id} not found`);
      }
      console.log(response);
      break;

    case 'add':
      response = await contactsPath.addContact(name, email, phone.toString());
      console.log(response);
      break;

    case 'remove':
      response = await contactsPath.removeContact(id.toString());
      if (!response) {
        throw new Error(`Contact ${id} not found`);
      }
      console.log(response);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}
// console.log('arrey:', argv);
invokeAction(argv);
// invokeAction({ action: 'list' });
// invokeAction({ action: 'get', id: '5' });
// invokeAction({
//   action: 'add',
//   name: 'Vasya',
//   email: 'vasya@gmail.com',
//   phone: '+380974563245',
// });
// invokeAction({ action: 'remove', id: '2' });
