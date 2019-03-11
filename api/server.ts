import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import WordpressControlsAPI from '../datasources/wordpress-controls';
import resolvers from './resolvers';  

const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  dataSources: () => ({
    wordpressControlsAPI: new WordpressControlsAPI()
  }),
});

server.listen().then(({ url }) => {
  console.log('🤖  Beep boop, GraphQL server listening on port 4000');
});
