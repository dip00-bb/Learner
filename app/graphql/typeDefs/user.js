import { gql } from 'graphql-tag';

export const userTypeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email:String
  }

  extend type Query {
    users: [User]
  }

  extend type Mutation {
    addUser(input:UserInfo!): User
  }

  input UserInfo {
    firstName:String!,
    lastName:String!,
    email:String!
  }

  
`;
