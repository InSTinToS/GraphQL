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

export default resolvers;
