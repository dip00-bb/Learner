import { createYoga, createSchema } from 'graphql-yoga';
import typeDefs from '../../graphql/schema.js'
import resolvers from '../../graphql/resolvers.js'


// ✅ Create Yoga instance
const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  graphqlEndpoint: '/api/graphql',
});

// ✅ Handle Next.js API Routes (POST + GET)
export { yoga as GET, yoga as POST };
