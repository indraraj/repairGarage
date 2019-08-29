import React from 'react';
import styles from './HeaderComponent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEdit, faBell } from '@fortawesome/free-solid-svg-icons';
import UserImageComponent from '../../uiHelpers/UserImageComponent/UserImageComponent';

const HeaderComponent = (props) =>{
    return(
        <div className={styles.HeaderComponent}>
            <div className={styles.HedearLogo}>
                <h1>repair Garage</h1>
            </div>
            <div className={styles.HeaderNav}>
                <div className={styles.selected}>
                    <FontAwesomeIcon icon={faHome} size="lg"/>
                    <span>Home</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faEdit} size="lg"/>
                    <span>Answer</span>
                </div>
                <div>   
                    <FontAwesomeIcon icon={faBell} size="lg"/>
                    <span>Notification</span>
                </div>
            </div>
            <div className={styles.HeaderTopsection}>
                <div className={styles.searchBox}>
                    <input type='text'></input>
                </div>
                <div className={styles.profileImage}>
                    <UserImageComponent imgName='userImage' size='30px' imgText='userImage'></UserImageComponent>
                </div>
                <div className={styles.addQuestion}>
                    <button>Add Question</button>
                </div>
            </div>
        </div>
    )
    
}

export default HeaderComponent;