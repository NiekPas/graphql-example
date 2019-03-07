"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_graphql_1 = __importDefault(require("express-graphql"));
var graphql_1 = require("graphql");
var pages_1 = __importDefault(require("./pages"));
var schema = graphql_1.buildSchema("\n  type pageData {\n    id: Int!\n    title: String!\n    content: String!\n  }\n  type Query {\n    pageData(id: Int!): pageData!\n  }\n");
// The root provides a resolver function for each API endpoint
var root = {
    pageData: function (_a) {
        var id = _a.id;
        return pages_1.default.find(function (p) { return p.id === id; });
    }
};
var app = express_1.default();
app.use('/graphql', express_graphql_1.default({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a graphQL API server at localhost:4000/graphql');
