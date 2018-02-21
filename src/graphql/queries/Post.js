'use strict';

const GraphQL = require('graphql');

const {
  GraphQLList,
	GraphQLString,
} = GraphQL;

const PostType = require('../types/Post');

const PostResolver = require('../resolvers/Post');

module.exports = {

  index() {
    return {
      type: new GraphQLList(PostType),
      description: 'This will return all the post we finde in the given subreddit',
      args: {
        subreddit: {
          type: GraphQLString,
          description: 'Please enter a subreddit name'
        }
      },
      resolve(parent, args) {
        return PostResolver.index(args);
      }
    }
  }

};
