import React, {useState} from 'react';
 import styled from 'styled-components'
import styles from "./loginform.module.css"

const Loginform = ({login}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailHandler = (e)=>{
        setEmail(e.target.value)
        
    }

    const passwordHanlder = (e)=>{
        setPassword(e.target.value)
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        login({
            variables: {
                email: email,
                password: password,
            }
        })
    }

   
    return (
        <div>
            <div className={styles.loginform}>
                <h1>Log In</h1>
                <form action="" onSubmit={submitHandler}>
                <div className={styles.formControl}>
                   <label htmlFor="email">Email</label>
                    <input onChange={emailHandler} id="email" type="email" value={email} required/>

                   </div>
                    <div className={styles.formControl}>
                    <label htmlFor="password">Password</label>
                    <input onChange={passwordHanlder} id="password" type="password" value={password}  required/>

                    </div>
                    <input type="submit" value="Log In" />
                </form>
            </div>
        </div>
    );
}

export default Loginform;
