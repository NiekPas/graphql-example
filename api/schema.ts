import { gql } from 'apollo-server';

const typeDefs = gql`
type wordpressControl {
    id: Int!
    name: String!
    htmlContent: String!
  }
  type Query {
    wordpressControls: [wordpressControl]
    wordpressControl(id: Int!): wordpressControl
  }
`

export default typeDefs;
