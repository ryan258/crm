import mongoose from 'mongoose'
import { ContactSchema } from '../models/crmModel'

// create a new Contact constructor w/ mongoose
// - arg0 - name in the database
// - arg1 - schema to use in that db
const Contact = mongoose.model('Contact', ContactSchema)

export const addNewContact = (req, res) => {
  // here we're using the model to create a new instance/document in the db's collection WITH the body of the request
  let newContact = new Contact(req.body)
  // save this new contact into the database
  newContact.save((err, contact) => {
    if (err) {
      res.send(err)
    }
    // otherwise, send data as json to the db
    res.json(contact)
  })
}

// now we need to pass this to the routes to use this in the POST method

export const getContacts = (req, res) => {
  // use the Contacts database to find something
  Contact.find({}, (err, contact) => {
    if (err) {
      // res.send(err)
      console.log(err)
    }
    // otherwise, send data as json to the db
    res.json(contact)
  })
}

// now we need to go to our routes

export const getContactWithID = (req, res) => {
  // when you get the request object you get a whole bunch of info w/ it... like the body, which has all that data, plus metadata, ie params!
  //! contactID will come from the :contactID  we see in crmRoutes.js's PUT & DELETE routes
  Contact.findById(req.params.contactID, (err, contact) => {
    if (err) {
      // res.send(err)
      console.log(err)
    }
    // otherwise, send data as json to the db
    res.json(contact)
  })
}

// now we need to go to our routes

export const updateContact = (req, res) => {
  // .findOneAndUpdate(a, b, c, d)
  // - a - object of options to get find by
  // - b - req.body - the data we want to update
  // - c - pass some options
  //     - new: true - will tell the db to return the new object, the UPDATED contact - false would return the old obj, not the updated one
  //     - useFindAndModify: false - this will allow us to use most recent functions - no deprecation flag errors
  // - d - action function
  Contact.findOneAndUpdate({ _id: req.params.contactID }, req.body, { new: true, useFindAndModify: false }, (err, contact) => {
    if (err) {
      // res.send(err)
      console.log(err)
    }
    // otherwise, send data as json to the db
    res.json(contact)
  })
}

// now we need to go to our routes and use this in the PUT route

export const deleteContact = (req, res) => {
  Contact.remove({ _id: req.params.contactID }, (err, contact) => {
    if (err) {
      // res.send(err)
      console.log(err)
    }
    // otherwise, send data as json to the db
    res.json({ message: 'successfully deleted contact! 👻' })
  })
}

// now we need to go to our routes and use this in the PUT route
