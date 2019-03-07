import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import pages from './pages';

const schema = buildSchema(`
  type pageData {
    id: Int!
    title: String!
    content: String!
  }
  type Query {
    pageData(id: Int!): pageData!
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  pageData: ({id}: {id: number}) => {
    return pages.find(p => p.id === id);
  }
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);
console.log('Running a graphQL API server at localhost:4000/graphql');
