"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = __importDefault(require("./schema"));
const wordpress_controls_1 = __importDefault(require("../datasources/wordpress-controls"));
const resolvers_1 = __importDefault(require("./resolvers"));
const server = new apollo_server_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
    dataSources: () => ({
        wordpressControlsAPI: new wordpress_controls_1.default()
    }),
});
server.listen().then(({ url }) => {
    console.log('🤖  Beep boop, GraphQL server listening on port 4000');
});
