import React from 'react';
import styles from './GreatingHomeComponent.module.scss';
import UserImageComponent from '../../uiHelpers/UserImageComponent/UserImageComponent';

const GreatingHomeComponent = (props) =>{
    return(
        <div className={styles.GreatingHomeComponent}>
            <div>
                <UserImageComponent imgName='userImage' size='20px' imgText='userImage'></UserImageComponent>
                <span>Indra Shukla</span>
            </div>
            <h1>
                What is Your Question?
            </h1>            
        </div>
    )
}

export default GreatingHomeComponent;