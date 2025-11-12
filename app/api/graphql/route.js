import { schema } from '@/app/graphql/schema';
import { createYoga, createSchema } from 'graphql-yoga';


// ✅ Create Yoga instance
const yoga = createYoga({
  schema:schema,
  graphqlEndpoint: '/api/graphql',
});

// ✅ Handle Next.js API Routes (POST + GET)
export { yoga as GET, yoga as POST };
