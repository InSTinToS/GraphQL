import { gql } from "apollo-server";

const schema = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    active: Boolean
  }

  type Post {
    _id: ID!
    author: User!
    title: String!
    content: String!
  }

  type Query {
    hello: String
    users: [User!]!
    getUserByEmail(email: String!): User
  }

  type Mutation {
    createUser(_id: ID!, name: String!, email: String!): User!
  }
`;

export default schema;
