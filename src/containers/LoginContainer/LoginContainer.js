import React, {Component} from 'react';
import styles from './LoginContainer.module.scss';
import LoginComponent from '../../components/Login/LoginComponent/LoginComponent';
import SignUpComponent from '../../components/Login/SignUpComponent/SignUpComponent';

class LoginContainer extends Component{
    render(){
        return(
            <div className={styles.LoginContainer}>
                {/* <LoginComponent></LoginComponent> */}
                <div className={styles.loginBox}>
                    <div className={styles.header}>
                        <h1>Repair Garage</h1>
                        <p>A place you can trust to share and seek path toward better relationship.</p>
                    </div>
                    {/* <LoginComponent></LoginComponent> */}
                    <SignUpComponent></SignUpComponent>
                </div>
            </div>
        )
    }
};

export default LoginContainer;