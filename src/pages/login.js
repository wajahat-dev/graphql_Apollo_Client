import React from 'react';
import {useApolloClient, useMutation, gql} from '@apollo/client'
import LoginForm from '../components/loginform'

const LOGIN_USER = gql`

    mutation Login($email: String, $password: String){
        login(email: $email, password: $password)
    }

`;


const IS_LOGGED_IN = gql`
  query isUserLoggedIn{
    isLoggedIn @client
  }

`


const Login = () => {
    const client = useApolloClient();
    const [login, {loading, error}] = useMutation(LOGIN_USER,{
        onCompleted(a){
            
            
            localStorage.setItem('token', a.login)
            if(a.login){
                client.writeQuery({query:IS_LOGGED_IN, data: {isLoggedIn: true}})        
              
            }
         }
    })

    
    if (loading) return <h1>Loading...</h1>
    if (error) return <p>An error occured</p>
   
    return (
        <div>
            <h1>This is a login Page</h1>
            <LoginForm login={login}/>
        </div>
    );
}

export default Login;
