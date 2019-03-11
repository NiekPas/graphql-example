"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = apollo_server_1.gql `
type wordpressControl {
    id: Int!
    name: String!
    htmlContent: String!
  }
  type Query {
    wordpressControls: [wordpressControl]
    wordpressControl(id: Int!): wordpressControl
  }
`;
exports.default = typeDefs;
