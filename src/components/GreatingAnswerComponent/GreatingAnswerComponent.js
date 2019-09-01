import React from 'react';
import styles from './GreatingAnswerComponent.module.scss';
import CallForActionHeaderComponent from '../CallForActionHeaderComponent/CallForActionHeaderComponent';
const GreatingAnswerComponent = (props) =>{
    return(
        <div className={styles.GreatingAnswerComponent}>
            <CallForActionHeaderComponent iconName='faBriefcase'>Start asking questions.</CallForActionHeaderComponent>
            <div className={styles.footer}>
                <span>Tell your followers what kind of questions you want.</span>
                <button>Get started</button>
            </div>
        </div>
    )
}

export default GreatingAnswerComponent;