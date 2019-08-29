import React from 'react';
import styles from './GreatingComponent.module.scss';
import UserImageComponent from '../../uiHelpers/UserImageComponent/UserImageComponent';

const GreatingComponent = (props) =>{
    return(
        <div className={styles.GreatingComponent}>
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

export default GreatingComponent;