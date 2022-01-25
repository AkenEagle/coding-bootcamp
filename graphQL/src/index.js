const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Song {
    name: String
    artist: String
  }

  type Query {
    songs: [Song]
  }
`;

const songs = [
  {
    name: "Sunflower",
    artist: "Post Malone",
  },
];

const resolvers = {
  Query: {
    songs: () => songs,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
