import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

const startServer = (params) => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const server = new ApolloServer(params);

  server.listen().then(({ url }) => {
    console.log(`Server started at ${url}`);
  });
};

export default startServer;
