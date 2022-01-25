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
  // Sunflower
  {
    name: "Sunflower",
    artist: "Post Malone",
  },
  // One Dance
  {
    name: "One Dance",
    artist: "Drake",
  },
  //   5% Tint
  {
    name: "5% Tint",
    artist: "Travis Scott",
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
