const fs = require('fs/promises');
const path = require('path');
const contactPath = path.join(__dirname, 'contacts.json');

async function listContacts() {
  const data = await fs.readFile(contactPath);
  const allContacts = JSON.parse(data);
  return allContacts;
}

async function getContactById(contactId) {
  const data = await fs.readFile(contactPath);
  const allContacts = JSON.parse(data);
  return allContacts;
}

async function removeContact(contactId) {
  const data = await fs.readFile(contactPath);
  const allContacts = JSON.parse(data);
  return allContacts;
}

async function addContact(name, email, phone) {
  const data = await fs.readFile(contactPath);
  const allContacts = JSON.parse(data);
  return allContacts;
}

const contactsOperation = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

module.exports = contactsOperation;
