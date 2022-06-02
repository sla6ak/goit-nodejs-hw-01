const fs = require('fs/promises');
const { nanoid } = require('nanoid');
const path = require('path');
const contactPath = path.join(__dirname, 'contacts.json');

async function listContacts() {
  const data = await fs.readFile(contactPath);
  const allContacts = JSON.parse(data);
  return allContacts ? allContacts : null;
}

async function getContactById(contactId) {
  //const allContacts = listContacts() // тут можно переиспользовать функции
  const data = await fs.readFile(contactPath);
  const allContacts = JSON.parse(data);
  const contactByID = await allContacts.find(elem => elem.id === contactId);
  return contactByID ? contactByID : null;
}

async function removeContact(contactId) {
  const data = await fs.readFile(contactPath);
  const allContacts = JSON.parse(data);
  const contactByID = allContacts.find(elem => elem.id === contactId); //это только ради того чтоб вернуть удаленный контакт на клиент
  if (!contactByID) return null;
  const spliseContacts = allContacts.filter(el => el.id !== contactId);
  await fs.writeFile(contactPath, JSON.stringify(spliseContacts));
  return contactByID; //принято возвращать объект который удалили
}

async function addContact(name, email, phone) {
  const newContact = { id: nanoid(), name, email, phone }; // 1)готовим контакт для добавления
  const data = await fs.readFile(contactPath); // 2)готовим массив куда добавить
  const allContacts = JSON.parse(data);
  allContacts.push(newContact);
  await fs.writeFile(contactPath, JSON.stringify(allContacts));
  return newContact; // принято возвращать один контакт который добавляли
}

const contactsOperation = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

module.exports = contactsOperation;
