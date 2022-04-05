import { createServer } from "@graphql-yoga/node";

const server = createServer({
  graphiql: { endpoint: "/api/graphql" },
});

export default server;
