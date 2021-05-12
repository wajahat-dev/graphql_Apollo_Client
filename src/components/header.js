import React from 'react';
import styled from 'styled-components'
import {useApolloClient, gql} from '@apollo/client'

const IS_LOGGED_IN = gql`
  query isUserLoggedIn{
    isLoggedIn @client
  }

`

const Header = () => {
    const client = useApolloClient()
    
    const logOutHandler = ()=>{
        client.writeQuery({ query: IS_LOGGED_IN, data: { isLoggedIn: false } })
        localStorage.clear()
    }   

    return (
        <HeaderCom >
            <div className="header">
                <h1>Quake Header </h1>
                <button onClick={logOutHandler}>
                    Log Out
                </button>
               
            </div>
        </HeaderCom>
    );
}

export default Header;


const HeaderCom = styled.header`

    h1{
        border: 2px solid black;
        color: white;
        padding: 20px;
        background: navy;
        margin-top: 0;
        
    }

    div{
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        right: 0;
        
    }
`