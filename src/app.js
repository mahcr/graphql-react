'use strict';

const express = require('express');
// const morgan = require('morgan');
const bodyParser = require('body-parser');

const expressGraphQL = require('express-graphql');
const GraphQLSchema = require('./graphql/schemas/root');

const app = express();

app.use(bodyParser.json({ limit: '50mb'}));

// app.use(morgan('combined'))

app.use('/', expressGraphQL(() => ({
  graphiql: true,
  schema: GraphQLSchema
})));

module.exports = app;
