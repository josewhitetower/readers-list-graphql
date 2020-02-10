const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
//connect to db
mongoose.connect('mongodb://admin:admin123@ds217809.mlab.com:17809/books')
mongoose.connection.once('open', () => {
  console.log('connecte to db')
})

const app = express()
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))
app.listen(4000, () => {
  console.log('listening on port 4000')
})
