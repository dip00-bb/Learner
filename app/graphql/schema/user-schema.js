import { gql } from "apollo-server-micro";

export const userTypeDefs = qql`
    type User{
        id:ID!
        FirstName:String! 
        LastName:String! 
        Email:String!
    } 

    extend type Query{
        users:[User]
    }

`
