import { gql } from 'graphql-tag';

export const userTypeDefs = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
    email:String
  }


  type Token{
    token:String!
  }

  extend type Query {
    users: [User],
    token:Token
  }

  extend type Mutation {
    addUser(input:UserInfo!): Token
  }

  input UserInfo {
    firstName:String!,
    lastName:String!,
    email:String!
  }

  
`;
