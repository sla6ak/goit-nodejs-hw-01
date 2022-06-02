console.log('hello');
// const fs = require('fs/promises');
// const path = require('path');
// const argv = require('yargs').argv;
const contactsPath = require('./db/contacts');

async function invokeAction({ action, id, name, email, phone }) {
  let response = null;
  switch (action) {
    case 'list':
      response = await contactsPath.listContacts();
      console.log(response);
      break;

    case 'get':
      response = await contactsPath.getContactById(id);
      console.log(response);
      break;

    case 'add':
      response = await contactsPath.addContact(name, email, phone);
      console.log(response);
      break;

    case 'remove':
      response = await contactsPath.removeContact(id);
      console.log(response);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction({ action: 'list' });
