/**
 * Types helps to map all the properties so GraphQL can understand the results
 */

'use strict';

const GraphQL = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} = GraphQL;

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'Post Type, For all the post presen in Reddit',

  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'ID of the post'
    },
    title: {
      type: GraphQLString,
      description: 'Title of the post'
    },
    url: {
      type: GraphQLString,
      description: 'URL of the post'
    },
    author: {
      type: GraphQLString,
      description: 'Author of the post'
    },
    ups: {
      type: GraphQLInt,
      description: 'UPS of the post'
    },
    downs: {
      type: GraphQLString,
      description: 'downs of the post'
    },
    content: {
      type: GraphQLString,
      description: 'Content of the post'
    },
  })
});

module.exports = PostType;
