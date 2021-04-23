import { addNewContact, deleteContact, getContacts, getContactWithID, updateContact } from '../controllers/crmController'

const routes = (app) => {
  app
    .route('/contact')
    // get all contacts
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`)
      console.log(`Request type: ${req.method}`)
      next()
    }, getContacts)
    // post endpoint
    .post(addNewContact)

  // specific contact endpoint
  app
    .route('/contact/:contactID')
    // get specific contact endpoint
    .get(getContactWithID)
    // update specific contact end point
    .put(updateContact)
    // delete specific contact end point
    .delete(deleteContact)
}

export default routes
