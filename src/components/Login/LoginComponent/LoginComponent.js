import React, {useState} from 'react';
import styles from './LoginComponent.module.scss';
import { connect } from 'react-redux';
import axiosAuth from '../../../axios/axios-auth';

const LoginComponent = (props) => {
    const [userForm, SetUserForm] = useState({username:'',password:''});
    const usernameHandler = (e) =>{
        SetUserForm({
            username: e.target.value,
            password: userForm.password
        })
    }
    const passwordHandler = (e) =>{
        SetUserForm({
            username: userForm.username,
            password: e.target.value
        })
    }
    const loginClickHandler = () =>{
        console.log('Login Clicked');
        // if(userForm.username === 'indra' && userForm.password === 'ihl309'){
        //     props.authenticateUser();
        // }
        let postRequest = {
            "email": userForm.username,
            "password": userForm.password,
            "returnSecureToken": true
        }
        axiosAuth.post('',postRequest)
            .then( () =>{
                props.authenticateUser();
            })
            .catch( e =>{
                console.log(e);
            })
    }
    return (
        <div className={styles.LoginComponent}>
            <div className={styles.socialMedia}>
                <div className={styles.facebook}>
                    {/* <div>
                     <img src={images.facebook} alt='facebook' className={styles.socialIcon}></img>
                    </div> */}
                    <button>Continue with facebook</button>
                </div>
                <div className={styles.google}>
                    {/* <div>
                        <img src={images.google} alt='google' className={styles.socialIcon}></img>
                    </div> */}
                    <button>Continue with Google</button>
                </div>
                <div className={styles.signup}>
                    <span>
                        <span className={styles.ancherText}>Sign up with Email.</span> By Signing up you indicate that you have read and aggreed to Terms and contition.
                    </span>
                </div>
            </div>
            <div className={styles.userLogin}>
                <h3>Login</h3>
                <div>
                    <input placeholder='Username' onChange={usernameHandler} value={userForm.username}></input>
                </div>
                <div>
                    <input placeholder='Password' onChange={passwordHandler} value={userForm.password}></input>
                </div>
                <span>Forgot Password?</span>
                <div className={styles.loginButton}>
                    <button onClick={loginClickHandler}>Login</button>
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch =>{
    return{
        authenticateUser : () => dispatch({type: 'AUTHENTICATE'})
    }
}
export default connect(null, mapDispatchToProps)(LoginComponent);