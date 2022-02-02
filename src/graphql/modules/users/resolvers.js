import User from "../../../models/User";
import { NEW_SUB } from "./channels";

//! Resolver function params:
//? obj: objeto
//? args: parâmetros a serem recebidos
//? context: um contexto global

//! User fora de query
//? User Query automaticamente ja tem os valores adicionados no type User em
//? schema.gql a diferença em adicionar ele aqui é que podemos modificar antes

export default {
  User: {
    fullName: (user) => `${user.firstName} ${user.lastName}`,
  },
  Query: {
    user: async (_, { id }) => await User.findById(id),
    users: async () => await User.find({}),
  },
  Mutation: {
    createUser: async (_, { data }, { pubsub }) => {
      const newUser = await User.create(data);

      pubsub.publish(NEW_SUB, { newSub: newUser });

      return newUser;
    },
    updateUser: (_, { id, data }) =>
      User.findOneAndUpdate(id, data, { new: true }),
    deleteUser: async (_, { id }) => !!(await User.findOneAndDelete(id)),
  },
  Subscription: {
    newSub: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator([NEW_SUB]),
    },
  },
};
