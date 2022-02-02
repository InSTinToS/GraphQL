import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import path from "path";

const typesDefsArray = loadFilesSync(
  path.join(__dirname, "modules", "**", "*.gql")
);

const typeDefs = mergeTypeDefs(typesDefsArray);

export default typeDefs;
