const { Model } = require('../models');

// Example queries and mutations, use model names as necessary

const resolvers = {
  Query: {
    model: async () => {
      return Model.find({});
    },
  },
  Mutation: {
    createModel: async (parent, args) => {
      const model = await Model.create(args);
      return model;
    },
  },
};

module.exports = resolvers;
