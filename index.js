// the entry point for our server
import express from 'express'
import routes from './src/routes/crmRoutes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const PORT = 4000

// mongoose connection - connection btw mongo and the API
// "we'll wait for a result when connecting to the mongoDB"
mongoose.Promise = global.Promise
// "the conenction we're going to create"
// + we'll create a new CRM database
mongoose.connect('mongodb://localhost/CRMdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// set up bodyparser
// - allow bodyparser to parse the requests that are coming in
//   so they're readable by our API
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app, routes)
// now we can use all those routes

app.get('/', (req, res) => {
  res.send(`Node and Express server running on port ${PORT} 👻`)
})

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT} 🥳`)
})
