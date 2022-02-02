import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import startServer from "./startServer";
import "dotenv/config";

startServer({ typeDefs, resolvers });

//? Atributo obrigatório deve terminar com !
//? [User!]! -> não pode [null] ou null mas pode [] ou [User]

//? Query = GET
//? Mutation = POST/PUT/PATCH/DELETE
