const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    _id: ID
    name: String,
    email: String
    picture: String
  }

  type Post {
    _id: ID
    links: Number
    likers: [Likers]
    comments: [Comment]
  }

  type Likers {
		author: User
  }

  type Comment {
    text: String
    createdAt: String
    author: User
  }

  type Query {
    me: User
    getPosts: [Post!]
  }

  input CreatePostInput {
    title: String
    content: String
    image: String
    latitude: Float
    longitude: Float
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post
    deletePost(PostId: ID!): Post
  }
`;
