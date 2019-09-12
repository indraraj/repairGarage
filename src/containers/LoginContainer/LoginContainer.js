import React, {Component} from 'react';
import styles from './LoginContainer.module.scss';
import LoginComponent from '../../components/Login/LoginComponent/LoginComponent';

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
                    <LoginComponent></LoginComponent>
                </div>
            </div>
        )
    }
};

export default LoginContainer;