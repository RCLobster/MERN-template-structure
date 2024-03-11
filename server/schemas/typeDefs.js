// Example typedefs
// Should match across models, typedefs, resolvers, and front-end queries

const typeDefs = `
  type Model {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    model: [Model]
  }

  type Mutation {
    createModel(tech1: String!, tech2: String!): Model
  }
`;

module.exports = typeDefs;
