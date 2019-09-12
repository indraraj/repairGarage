import React, {useState} from 'react';
import styles from './SignUpComponent.module.scss';
import axiosAuth from '../../../axios/axios-auth';

const SignUpComponent = (props) =>{
    const initialState = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPass: '',
        passwordMatch: false
    }
    const [userDetails, setUserDetails] = useState(initialState);
    const inputHandler = (e) =>{
        switch (e.target.name){
            case 'firstname':
                setUserDetails({
                    ...userDetails,
                    firstname: e.target.value
                });
                break;
            case 'lastname':
                setUserDetails({
                    ...userDetails,
                    lastname: e.target.value
                });
                break;
            case 'email':
                setUserDetails({
                    ...userDetails,
                    email: e.target.value
                });
                break;
            case 'password':
                    setUserDetails({
                        ...userDetails,
                        password: e.target.value,
                        passwordMatch: false
                    });
                break;
            case 'confirmPass':
                    if(userDetails.password === e.target.value && userDetails.password !== ''){
                        setUserDetails({
                            ...userDetails,
                            confirmPass: e.target.value,
                            passwordMatch: !userDetails.passwordMatch
                        });
                    }else{
                        setUserDetails({
                            ...userDetails,
                            confirmPass: e.target.value,
                            passwordMatch: false
                        });
                    }
                break;
            default :
                break;
        }

    }
    const signupClickHandler = () =>{
        console.log('SignUp Clicked');
        let postRequest = {
            "email": userDetails.email,
            "password": userDetails.password,
            "returnSecureToken": true
        }
        axiosAuth.post('accounts:signUp?key=AIzaSyDwfiuUXhSWqgN69x19VGB0ICy6XDklTKY',postRequest)
            .then( () =>{
                props.history.push('/login');
            })
            .catch( e =>{
                console.log(e);
            })
    }
    return(
        <div className={styles.SignUpComponent}>
            <h3>Sign Up</h3>
            <div className={styles.userDetails}>
                <input placeholder='Firstname' onChange={inputHandler} value={userDetails.firstname} id='firstname' name='firstname'></input>
                <input placeholder='Lastname' onChange={inputHandler} value={userDetails.lastname} id='lastname' name='lastname'></input>
            </div>
            <div className={styles.inputDiv}>
                <input placeholder='Email' onChange={inputHandler} value={userDetails.email} id='email' name='email'></input>
            </div>
            <div className={styles.inputDiv}>
                <input placeholder='Password' type='password' className={userDetails.passwordMatch ? styles.formGreen : null} onChange={inputHandler} value={userDetails.password} id='password' name='password'></input>
            </div>
            <div className={styles.inputDiv}>
                <input placeholder='Confirm Password' type='password' className={userDetails.passwordMatch ? styles.formGreen : null} onChange={inputHandler} value={userDetails.confirmPass} id='confirmPass' name='confirmPass'></input>
            </div>
            <div className={styles.inputDiv}>
                <button className={userDetails.passwordMatch ? null : styles.disableButton} onClick={ userDetails.passwordMatch ? signupClickHandler : null}>Sign Up</button>
            </div>
            <div>
                <span>By clicking "Sign Up" you indicate that you have read and agree to Quora's Terms of Service and Privacy Policy.</span>
            </div>
        </div>
    )
};

export default SignUpComponent;