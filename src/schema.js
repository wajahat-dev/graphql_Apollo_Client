import React from 'react';
import {gql} from '@apollo/client'



export const typeDefs = gql`

    extend type Query{
        isLoggedIn: Boolean!
        cartItems: [ID!]!
    }

`

export const resolvers = {}