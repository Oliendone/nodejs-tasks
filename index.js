const contactsFunctions = require("./contacts");
const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contactsFunctions.listContacts();
      break;

    case "get":
      contactsFunctions.getContactById(id);
      break;

    case "add":
      console.log(contactsFunctions.addContact(name, email, phone));
      break;

    case "remove":
      console.log(contactsFunctions.removeContact(id));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);