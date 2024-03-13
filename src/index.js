const { ApolloServer}  = require('apollo-server')

const typeDefs = require('./typeDefs');
const resolvers = require('./resolver');

const { PORT = 3002 } = process.env;

const server = new ApolloServer( { typeDefs, resolvers } );

server.listen(PORT)
    .then(({url}) => console.log(`🚀 Server running at ${url}`));