const routes = (app) => {
  // main route for getting all our contacts or posting a new contact
  app
    .route('/contact')
    .get(
      (req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next()
        // next() allows you to use middleware in the middle of a req || res
        //        and then continue on
      },
      (req, res, next) => {
        res.send('GET request successful!')
      }
    )
    .post((req, res) => {
      res.send('POST request successful!')
    })

  // a route for editing or deleting an existing contact
  // :passing a single contactID
  app
    .route('/contact/:contactID')
    .put((req, res) => {
      res.send('PUT request successful!')
    })
    .delete((req, res) => {
      res.send('DELETE request successful!')
    })
}

export default routes
