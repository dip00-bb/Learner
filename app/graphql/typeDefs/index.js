import { gql } from 'graphql-tag';
import { userTypeDefs } from './user.js';

export const typeDefs = [
  gql`
    type Query
    type Mutation
  `,
  userTypeDefs,
];
