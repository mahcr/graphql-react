'use strict';

const GraphQL = require('graphql');
const {
	GraphQLObjectType,
	GraphQLSchema,
} = GraphQL;

const PostQuery = require('../queries/Post');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'This is the default root query provided by our app',
  fields: {
    posts: PostQuery.index()
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
