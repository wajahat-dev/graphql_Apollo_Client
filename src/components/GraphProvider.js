import React from 'react';
import {ApolloProvider , ApolloClient, HttpLink, InMemoryCache, gql, useApolloClient} from "@apollo/client"
import {typeDefs, resolvers} from '../schema'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: "http://localhost:4000",
  headers:{
    authorization: localStorage.getItem('token')
  },
 
})

const client = new ApolloClient({
  cache,
  link,
  typeDefs,
  resolvers
})



const IS_LOGGED_IN = gql`
  query isUserLoggedIn{
    isLoggedIn @client
  }

`


cache.writeQuery({
  query: IS_LOGGED_IN,
  data: {
    isLoggedIn: localStorage.getItem('token') === "null" ? false : (localStorage.getItem('token') === null ? false: true)
  },
});


const GraphProvider = (props) => {


  
      return (
    <ApolloProvider  client={client}>
        {props.children}
    </ApolloProvider>
    );
}

export default GraphProvider;
