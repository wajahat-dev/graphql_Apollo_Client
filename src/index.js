import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GraphProvider from './components/GraphProvider'
import Login from "./pages/login"
import {gql, useQuery,useApolloClient} from '@apollo/client'

const IS_LOGGED_IN = gql`
  query isUserLoggedIn{
    isLoggedIn @client
  }

`

const IsLoggedIn = ()=>{
  const client = useApolloClient()
  const {data} = useQuery(IS_LOGGED_IN)
  
  console.log(localStorage.getItem('token') === "null" ? false : (localStorage.getItem('token') === null ? false: true))
  console.log(localStorage.getItem('token') === null )
  
  
  return data.isLoggedIn ? <App /> : <Login />
}


ReactDOM.render(
    <GraphProvider>
      <React.StrictMode>
        {/* <App /> */}
        <IsLoggedIn />
      </React.StrictMode>
    </GraphProvider>,
  document.getElementById('root')
);

