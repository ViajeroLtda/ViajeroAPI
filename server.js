const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers'); 
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true
})
.then(() => console.log('db connected'))
.catch(err => console.log(`err ${err}`));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`server listening on ${url}`);
})