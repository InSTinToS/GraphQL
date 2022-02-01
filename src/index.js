const { ApolloServer, gql } = require("apollo-server");

//? Atributo obrigatório deve terminar com !
//? [User!]! -> não pode [null] ou null mas pode [] ou [User]

//? Query = GET
//? Mutation = POST/PUT/PATCH/DELETE

const users = [
  {
    _id: "1",
    name: "Miguel",
    email: "miguel@miguel.com",
  },
  {
    _id: "2",
    name: "Miguel 2",
    email: "miguel2@miguel.com",
  },
  {
    _id: "3",
    name: "Miguel 3",
    email: "miguel3@miguel.com",
  },
];

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

const resolvers = {
  Query: {
    hello: () => "Hello World",
    users: () => users,
    getUserByEmail: (_, args) =>
      users.find(({ email }) => email === args.email),
  },
  Mutation: {
    createUser: (_, { _id, name, email }) => {
      const newUser = { _id, name, email };

      users.push(newUser);

      return newUser;
    },
  },
};

const server = new ApolloServer({ typeDefs: schema, resolvers });

server.listen().then(({ url }) => console.log("Server started at " + url));
