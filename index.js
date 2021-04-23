// the entry point for our server
import express from 'express'
import routes from './src/routes/crmRoutes'

const app = express()
const PORT = 4000

routes(app, routes)
// now we can use all those routes

app.get('/', (req, res) => {
  res.send(`Node and Express server running on port ${PORT} 👻`)
})

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT} 🥳`)
})
