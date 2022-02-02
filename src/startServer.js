import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { PubSub } from "graphql-subscriptions";

//? pubsub adicionado no contexto global

const startServer = ({ typeDefs, resolvers }) => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const pubsub = new PubSub();
  const server = new ApolloServer({ typeDefs, resolvers, context: { pubsub } });

  server.listen().then(({ url }) => {
    console.log(`Server started at ${url}`);
  });
};

/**
 *
 *  Beginning in Apollo Server 3,
 *  subscriptions are not supported by the "batteries-included"
 *  apollo-server package.
 *  To enable subscriptions, you must first swap to the apollo-server-express
 *  package (or any other  Apollo Server integration package that
 *  supports subscriptions).
 */
export default startServer;
