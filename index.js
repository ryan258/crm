import express from 'express'
import routes from './src/routes/crmRoutes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const PORT = 4000

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/CRMdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app, routes)

// serving images from /public
// - don't put anything that executes code because the browser could have an issue with that
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(`Node and Express server running on port ${PORT} 👻`)
})

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT} 🥳`)
})
