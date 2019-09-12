import React from 'react';
import styles from './LoginComponent.module.scss';
import images from '../../../assets/images/Images ';

const LoginComponent = (props) => {
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
                        Sign up with Email. By Signing up you indicate that you have read and aggreed to Terms and contition.
                    </span>
                </div>
            </div>
            <div className={styles.userLogin}>
                <h3>Login</h3>
                <div>
                    <input placeholder='Username'></input>
                </div>
                <div>
                    <input placeholder='Password'></input>
                </div>
                <span>Forgot Password?</span>
                <div className={styles.loginButton}>
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;